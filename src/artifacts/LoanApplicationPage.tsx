import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Mail, Phone, RefreshCw, User } from "lucide-react";

import MortgageApplication from "./MortgageApplication";
import SubmitDocumentsTab from "./SubmitDocumentsTab";

const IntentionCard = ({ icon: Icon, title, onClick, isSelected }: any) => (
  <Card
    className={`cursor-pointer transition-all flex-1 ${
      isSelected ? "ring-2 ring-blue-500" : "hover:shadow-lg"
    }`}
    onClick={onClick}
  >
    <CardContent className="flex flex-col items-center justify-center p-6 h-full">
      <Icon className="w-12 h-12 mb-4" />
      <CardTitle className="text-center">{title}</CardTitle>
    </CardContent>
  </Card>
);

const LoanApplicationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedDocuments, setUploadedDocuments] = useState({});
  const [applicationIntent, setApplicationIntent] = useState("");
  const [realtorInfo, setRealtorInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Updated steps array
  const steps = [
    { id: 1, title: "Loan Request" },
    { id: 2, title: "Submit Documents" },
    { id: 3, title: "Review & Submit" },
  ];

  const handleFileUpload = (documentType: string, file: any) => {
    setUploadedDocuments({
      ...uploadedDocuments,
      [documentType]: file.name,
    });
  };

  const handleRealtorInfoChange = (field: string, value: any) => {
    setRealtorInfo((prev) => ({ ...prev, [field]: value }));
  };

  const renderRealtorFields = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="flex items-center space-x-2">
        <User className="w-5 h-5 text-gray-500" />
        <Input
          id="realtorName"
          type="text"
          placeholder="Realtor's Full Name"
          value={realtorInfo.name}
          onChange={(e) => handleRealtorInfoChange("name", e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <Phone className="w-5 h-5 text-gray-500" />
        <Input
          id="realtorPhone"
          type="tel"
          placeholder="Realtor's Phone Number"
          value={realtorInfo.phone}
          onChange={(e) => handleRealtorInfoChange("phone", e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <Mail className="w-5 h-5 text-gray-500" />
        <Input
          id="realtorEmail"
          type="email"
          placeholder="Realtor's Email Address"
          value={realtorInfo.email}
          onChange={(e) => handleRealtorInfoChange("email", e.target.value)}
        />
      </div>
    </div>
  );

  const renderPurchaseFields = () => (
    <>
      <div>
        <Label htmlFor="purchaseContract">
          Upload Purchase Contract (signed and dated)
        </Label>
        <div className="flex items-center space-x-2">
          <Input
            id="purchaseContract"
            type="file"
            className="w-full"
            onChange={(e) =>
              // @ts-ignore
              handleFileUpload("Purchase Contract", e.target.files[0])
            }
          />
        </div>
      </div>
      <div>
        <Label htmlFor="earnestMoney">
          Upload Copy of Earnest Money Check or Wire Confirmation
        </Label>
        <div className="flex items-center space-x-2">
          <Input
            id="earnestMoney"
            type="file"
            className="w-full"
            onChange={(e) =>
              // @ts-ignore
              handleFileUpload("Earnest Money", e.target.files[0])
            }
          />
        </div>
      </div>
      <div>
        <Label htmlFor="condoInfo">
          If Applicable: Condo/Co-op Management Company or Board Contact
        </Label>
        <Input id="condoInfo" type="text" placeholder="Contact Name & Number" />
      </div>
    </>
  );

  const renderRefinanceFields = () => (
    <>
      <div>
        <Label htmlFor="estimatedValue">Estimated Property Value</Label>
        <Input
          id="estimatedValue"
          type="text"
          placeholder="Enter estimated value"
        />
      </div>
      <div>
        <Label htmlFor="insuranceDeclaration">
          Upload Copy of Homeowners Insurance Declarations Page
        </Label>
        <div className="flex items-center space-x-2">
          <Input
            id="insuranceDeclaration"
            type="file"
            className="w-full"
            onChange={(e) =>
              // @ts-ignore
              handleFileUpload("Insurance Declaration", e.target.files[0])
            }
          />
        </div>
      </div>
      <div>
        <Label htmlFor="taxes">Annual Real Estate Taxes</Label>
        <Input id="taxes" type="text" placeholder="Enter annual taxes" />
      </div>
      <div>
        <Label htmlFor="hoaDues">
          Homeowner Association Dues (if applicable)
        </Label>
        <Input id="hoaDues" type="text" placeholder="Enter HOA dues" />
      </div>
    </>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">I'd like to...</h3>
                  <div className="flex space-x-4 h-32">
                    <IntentionCard
                      icon={Home}
                      title="Purchase a Home"
                      onClick={() => setApplicationIntent("purchase")}
                      isSelected={applicationIntent === "purchase"}
                    />
                    <IntentionCard
                      icon={RefreshCw}
                      title="Refinance a Home"
                      onClick={() => setApplicationIntent("refinance")}
                      isSelected={applicationIntent === "refinance"}
                    />
                  </div>
                </div>

                {applicationIntent === "purchase" && (
                  <div className="space-y-4 mt-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Realtor Information
                    </h3>
                    {renderRealtorFields()}

                    <h3 className="text-lg font-semibold mb-4">
                      Purchase Information
                    </h3>
                    {renderPurchaseFields()}
                  </div>
                )}

                {applicationIntent === "refinance" && (
                  <div className="space-y-4 mt-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Refinance Information
                    </h3>
                    {renderRefinanceFields()}
                  </div>
                )}

                {Object.entries(uploadedDocuments).map(
                  ([docType, fileName]) => (
                    <Alert key={docType}>
                      <AlertTitle>Document Uploaded</AlertTitle>
                      <AlertDescription>
                        {/* @ts-ignore */}
                        {docType}: {fileName}
                      </AlertDescription>
                    </Alert>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        );
      case 2:
        return <SubmitDocumentsTab />;
      case 3:
        return (
          <MortgageApplication />
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home Loan Application Portal</h1>
      <Tabs value={currentStep.toString()} className="mb-4">
        <TabsList>
          {steps.map((step) => (
            <TabsTrigger
              key={step.id}
              value={step.id.toString()}
              onClick={() => setCurrentStep(step.id)}
            >
              {step.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      {renderStep()}
      <div className="mt-4 flex justify-between">
        <Button
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
          disabled={currentStep === 3}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default LoanApplicationPage;
