import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertCircle,
  Car,
  CheckCircle,
  CreditCard,
  Home,
  FileSpreadsheet,
  FileText,
  List,
  PlusCircle,
  RefreshCcw,
  User,
} from "lucide-react";

import LoanApplicationPage from "./LoanApplicationPage";

const PrivateBankingPortal = () => {
  const [isLoanStarted, setIsLoanStarted] = useState(false);
  const [activeCard, setActiveCard] = useState("");
  const [selectedLoanId, setSelectedLoanId] = useState("");

  // Mock data for loans
  const loansData = [
    {
      id: "174192",
      type: "Mortgage",
      name: "Mortgage - 174192",
      status: "Pending",
      action: "One or more items require review",
    },
    {
      id: "635789",
      type: "Auto",
      name: "Auto - 635789",
      status: "Active",
      action: "Re-financing Option Avail",
    },
    {
      id: "990154",
      type: "Personal",
      name: "Personal - 990154",
      status: "Fully Paid",
      action: "No action",
    },
  ];

  const getLoanTypeIcon = (type: string) => {
    switch (type) {
      case "Mortgage":
        return <Home className="w-5 h-5 text-blue-500" />;
      case "Auto":
        return <Car className="w-5 h-5 text-green-500" />;
      case "Personal":
        return <User className="w-5 h-5 text-purple-500" />;
      default:
        return <CreditCard className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-200 text-yellow-800";
      case "Active":
        return "bg-green-500 text-white";
      case "Fully Paid":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case "One or more items require review":
        return <AlertCircle className="w-5 h-5 mr-2 text-red-500" />;
      case "Re-financing Option Avail":
        return <RefreshCcw className="w-5 h-5 mr-2 text-green-500" />;
      case "No action":
        return <CheckCircle className="w-5 h-5 mr-2 text-blue-500" />;
      default:
        return null;
    }
  };

  const handleRequestFinancing = () => {
    setIsLoanStarted(true);
  };

  const handleLoanClick = (loanId: string) => {
    setSelectedLoanId(loanId);
  };

  const LoanDetailView = ({ loanId }: any) => {
    const loanDetail = {
      id: loanId,
      name: `Mortgage - ${loanId}`,
      status: "Pending",
      type: "Mortgage",
      purpose: "Purchase",
      term: "30-year",
      interestRateType: "Fixed",
      interestRate: "3.25%",
      apr: "3.45%",
      originationDate: "06/15/2023",
      maturityDate: "06/15/2053",
      loanAmount: "$565,000.00",
      downPayment: "$113,000.00",
      ltvRatio: "83.33%",
    };

    const documents = [
      {
        name: `Loan Agreement - Mortgage - ${loanId}.pdf`,
        type: "pdf",
        lastUpdated: "07/15/2023",
        updatedBy: "John Doe",
      },
      {
        name: "Terms and Conditions.pdf",
        type: "pdf",
        lastUpdated: "07/15/2023",
        updatedBy: "Jane Smith",
      },
      {
        name: "Payment Schedule.xlsx",
        type: "xlsx",
        lastUpdated: "07/16/2023",
        updatedBy: "Mike Johnson",
      },
    ];

    const getDocumentIcon = (type: string) => {
      switch (type) {
        case "pdf":
          return <FileText className="w-5 h-5 text-red-500" />;
        case "xlsx":
          return <FileSpreadsheet className="w-5 h-5 text-green-500" />;
        default:
          return <FileText className="w-5 h-5 text-gray-500" />;
      }
    };

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold flex items-center">
            {getLoanTypeIcon(loanDetail.type)}
            <span className="ml-2">{loanDetail.name}</span>
          </h3>
          <div
            className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
              loanDetail.status
            )}`}
          >
            {loanDetail.status}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <strong>Loan ID:</strong> {loanDetail.id}
          </p>
          <p>
            <strong>Loan Type:</strong> {loanDetail.type}
          </p>
          <p>
            <strong>Loan Purpose:</strong> {loanDetail.purpose}
          </p>
          <p>
            <strong>Loan Term:</strong> {loanDetail.term}
          </p>
          <p>
            <strong>Interest Rate Type:</strong> {loanDetail.interestRateType}
          </p>
          <p>
            <strong>Interest Rate:</strong> {loanDetail.interestRate}
          </p>
          <p>
            <strong>APR:</strong> {loanDetail.apr}
          </p>
          <p>
            <strong>Origination Date:</strong> {loanDetail.originationDate}
          </p>
          <p>
            <strong>Maturity Date:</strong> {loanDetail.maturityDate}
          </p>
          <p>
            <strong>Loan Amount:</strong> {loanDetail.loanAmount}
          </p>
          <p>
            <strong>Down Payment:</strong> {loanDetail.downPayment}
          </p>
          <p>
            <strong>LTV Ratio:</strong> {loanDetail.ltvRatio}
          </p>
        </div>
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">Associated Documents</h4>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2">Type</th>
                <th className="text-left p-2">Document Name</th>
                <th className="text-left p-2">Last Updated</th>
                <th className="text-left p-2">Updated By</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{getDocumentIcon(doc.type)}</td>
                  <td className="p-2">{doc.name}</td>
                  <td className="p-2">{doc.lastUpdated}</td>
                  <td className="p-2">{doc.updatedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button onClick={() => setSelectedLoanId("")}>
          Back to Loans List
        </Button>
      </div>
    );
  };

  if (isLoanStarted) {
    return <LoanApplicationPage />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Private Banking Portal
      </h1>
      <div className="grid gap-6">
        {/* Request Financing Card */}
        <Card
          className={`cursor-pointer transition-all duration-300 ${
            activeCard === "start" ? "ring-2 ring-blue-500" : ""
          }`}
          onClick={() => setActiveCard("start")}
        >
          <CardHeader>
            <CardTitle className="flex items-center">
              <PlusCircle className="mr-2 text-green-500" />
              Request Financing
            </CardTitle>
            <CardDescription>
              Begin a new loan or credit line request
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleRequestFinancing} className="w-full">
              Start Application
            </Button>
          </CardContent>
        </Card>

        {/* View Financial Products Card */}
        <Card
          className={`cursor-pointer transition-all duration-300 ${
            activeCard === "view" ? "ring-2 ring-blue-500" : ""
          }`}
          onClick={() => setActiveCard("view")}
        >
          <CardHeader>
            <CardTitle className="flex items-center">
              <List className="mr-2 text-blue-500" />
              View Financial Products
            </CardTitle>
            <CardDescription>
              Manage your current loans and credit lines
            </CardDescription>
          </CardHeader>
          <CardContent>
            {activeCard === "view" && (
              <div className="space-y-4">
                {selectedLoanId ? (
                  <LoanDetailView loanId={selectedLoanId} />
                ) : (
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left p-2 w-1/4">Type</th>
                        <th className="text-left p-2 w-1/4">Loan Name</th>
                        <th className="text-left p-2 w-1/4">Status</th>
                        <th className="text-left p-2 w-1/4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loansData.map((loan) => (
                        <tr key={loan.id} className="border-t">
                          <td className="p-2">
                            <div className="flex items-center">
                              {getLoanTypeIcon(loan.type)}
                              <span className="ml-2">{loan.type}</span>
                            </div>
                          </td>
                          <td className="p-2">
                            <Button
                              variant="link"
                              onClick={() => handleLoanClick(loan.id)}
                            >
                              {loan.name}
                            </Button>
                          </td>
                          <td className="p-2">
                            <div
                              className={`px-3 py-1 rounded-full text-xs font-semibold inline-block w-24 text-center ${getStatusColor(
                                loan.status
                              )}`}
                            >
                              {loan.status}
                            </div>
                          </td>
                          <td className="p-2">
                            <div
                              className={`flex items-center ${
                                loan.action ===
                                "One or more items require review"
                                  ? "text-red-600 font-semibold"
                                  : ""
                              }`}
                            >
                              {getActionIcon(loan.action)}
                              <span className="text-sm">{loan.action}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      <CardFooter className="flex justify-center mt-6">
        <p className="text-sm text-gray-500">
          Need assistance? Contact your personal banking advisor
        </p>
      </CardFooter>
    </div>
  );
};

export default PrivateBankingPortal;
