import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Upload, ChevronDown, ChevronUp, X, Trash2, Briefcase, Building, Gift } from 'lucide-react';

const AssetSection = ({ title, icon: Icon, children, isOpen, onToggle }: any) => (
  <div className="border rounded-lg mb-4">
    <button
      className="w-full p-4 text-left font-semibold flex justify-between items-center"
      onClick={onToggle}
    >
      <div className="flex items-center">
        <Icon className="w-5 h-5 mr-2" />
        {title}
      </div>
      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
    </button>
    {isOpen && <div className="p-4 border-t">{children}</div>}
  </div>
);

const DocumentStatus = ({ name, status, message, onDelete }: any) => (
  <div className="flex items-center justify-between p-2 border rounded mb-2">
    <div className="flex items-center">
      {status === 'success' ? (
        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
      ) : (
        <X className="w-5 h-5 text-red-500 mr-2" />
      )}
      <span>{name}</span>
      {status === 'error' && <span className="ml-2 text-red-500 text-sm">{message}</span>}
    </div>
    {status === 'error' && (
      <Button variant="ghost" size="sm" onClick={onDelete}>
        <Trash2 className="w-4 h-4 text-red-500" />
      </Button>
    )}
  </div>
);

const CustomFileInput = ({ id, onFileSelect }: any) => {
  const [fileName, setFileName] = useState('No file chosen');
  const fileInputRef = useRef(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="flex-grow flex items-center border rounded-md overflow-hidden">
        <span className="px-3 py-2 bg-gray-100 text-gray-700 font-medium">Choose File</span>
        <span className="px-3 py-2 text-gray-500 truncate">{fileName}</span>
      </div>
      <Button
        type="button"
        className="bg-gray-900 text-white hover:bg-gray-700"
        // @ts-ignore
        onClick={() => fileInputRef.current.click()}
      >
        <Upload className="w-4 h-4 mr-2" />
        Upload
      </Button>
      <input
        ref={fileInputRef}
        id={id}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

const AssetsTab = () => {
  const [openSections, setOpenSections] = useState({
    cashAndSecurities: false,
    trustEntity: false,
    financialGift: false,
  });

  const [documents, setDocuments] = useState({
    bankStatement1: { name: 'Bank Statement 1', status: 'success' },
    bankStatement2: { name: 'Bank Statement 2', status: 'error', message: 'Older than 2 months' },
  });

  const toggleSection = (section: any) => {
    // @ts-ignore
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleFileUpload = (documentType: string, file: any) => {
    console.log(`Uploading ${file.name} for ${documentType}`);
    // Here you would typically handle the actual file upload and update the documents state
  };

  const handleDeleteDocument = (docKey: string) => {
    setDocuments(prev => {
      const newDocs = { ...prev };
      // @ts-ignore
      delete newDocs[docKey];
      return newDocs;
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Documents</CardTitle>
      </CardHeader>
      <CardContent>
        <AssetSection
          title="Cash and Securities Held at Institutions"
          icon={Briefcase}
          isOpen={openSections.cashAndSecurities}
          onToggle={() => toggleSection('cashAndSecurities')}
        >
          <p className="mb-4">Upload previous two months bank/brokerage statements (all pages)</p>
          <CustomFileInput 
            id="bankStatements"
            onFileSelect={(file: any) => handleFileUpload('Bank Statements', file)}
          />
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Document Status:</h4>
            {Object.entries(documents).map(([key, doc]: any) => (
              <DocumentStatus
                key={key}
                name={doc.name}
                status={doc.status}
                message={doc.message}
                onDelete={() => handleDeleteDocument(key)}
              />
            ))}
          </div>
        </AssetSection>
        <AssetSection
          title="Assets Held in the name of a trust or other legal entity"
          icon={Building}
          isOpen={openSections.trustEntity}
          onToggle={() => toggleSection('trustEntity')}
        >
          <p className="mb-4">Depending on entity type, upload one of the following:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Trust Document with all amendments and addenda</li>
            <li>Partnership Agreement</li>
            <li>LLC Operating Agreement</li>
          </ul>
          <CustomFileInput 
            id="entityDocuments"
            onFileSelect={(file: any) => handleFileUpload('Entity Documents', file)}
          />
        </AssetSection>
        <AssetSection
          title="Receiving a Financial Gift to Complete this Transaction"
          icon={Gift}
          isOpen={openSections.financialGift}
          onToggle={() => toggleSection('financialGift')}
        >
          <p className="mb-4">Please provide the following:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>A bank statement showing that the gifted funds have been deposited into your account.</li>
            <li>A Gift Letter, including the date, gift amount and the donor's name, address, phone number, and relationship to you. Please include a statement indicating repayment is not required.</li>
          </ul>
          <CustomFileInput 
            id="giftDocuments"
            onFileSelect={(file: any) => handleFileUpload('Gift Documents', file)}
          />
        </AssetSection>
      </CardContent>
    </Card>
  );
};

export default AssetsTab;
