import "./MortgageApplication.css";

const MortgageApplication = () => {
  return (
    <div>
      <h1 className="form-title">Mortgage Application Form</h1>

      <div className="section">
        <div className="section-header">
          I. TYPE OF MORTGAGE AND TERMS OF LOAN
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Mortgage Applied for:</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" checked /> Conventional
              </label>
              <label>
                <input type="checkbox" /> VA
              </label>
              <label>
                <input type="checkbox" /> FHA
              </label>
              <label>
                <input type="checkbox" /> USDA/Rural Housing Service
              </label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Agency Case Number:</label>
            <input type="text" value="123456" />
          </div>
          <div className="form-group">
            <label>Lender Case Number:</label>
            <input type="text" value="789012" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Amount:</label>
            <input type="number" value="300000" />
          </div>
          <div className="form-group">
            <label>Interest Rate:</label>
            <input type="number" value="3.5" step="0.1" />
          </div>
          <div className="form-group">
            <label>No. of Months:</label>
            <input type="number" value="360" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Amortization Type:</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" checked /> Fixed Rate
              </label>
              <label>
                <input type="checkbox" /> GPM
              </label>
              <label>
                <input type="checkbox" /> ARM
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          II. PROPERTY INFORMATION AND PURPOSE OF LOAN
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Subject Property Address:</label>
            <input type="text" value="123 Main St, Anytown, USA 12345" />
          </div>
          <div className="form-group">
            <label>No. of Units:</label>
            <input type="number" value="1" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Legal Description:</label>
            <input type="text" value="Lot 7, Block 3, Sunshine Acres" />
          </div>
          <div className="form-group">
            <label>Year Built:</label>
            <input type="number" value="2005" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Purpose of Loan:</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" checked /> Purchase
              </label>
              <label>
                <input type="checkbox" /> Refinance
              </label>
              <label>
                <input type="checkbox" /> Construction
              </label>
              <label>
                <input type="checkbox" /> Construction-Permanent
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Property will be:</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" checked /> Primary Residence
              </label>
              <label>
                <input type="checkbox" /> Secondary Residence
              </label>
              <label>
                <input type="checkbox" /> Investment
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">III. BORROWER INFORMATION</div>
        <div className="form-row">
          <div className="form-group">
            <label>Borrower's Name:</label>
            <input type="text" value="John Doe" />
          </div>
          <div className="form-group highlight-red">
            <label>Co-Borrower's Name:</label>
            <input type="text" value="" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group highlight-yellow">
            <label>Social Security Number:</label>
            <input type="text" value="123-45-6789" />
          </div>
          <div className="form-group">
            <label>Home Phone:</label>
            <input type="tel" value="(555) 123-4567" />
          </div>
          <div className="form-group">
            <label>DOB:</label>
            <input type="date" value="1980-01-15" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Marital Status:</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" checked /> Married
              </label>
              <label>
                <input type="checkbox" /> Unmarried
              </label>
              <label>
                <input type="checkbox" /> Separated
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Dependents:</label>
            <input type="text" value="2 (ages 8, 10)" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Present Address:</label>
            <input type="text" value="456 Elm St, Othercity, USA 67890" />
          </div>
          <div className="form-group">
            <label>Own/Rent:</label>
            <select>
              <option>Own</option>
              <option selected>Rent</option>
            </select>
          </div>
          <div className="form-group">
            <label>Years at Address:</label>
            <input type="number" value="5" />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">IV. EMPLOYMENT INFORMATION</div>
        <div className="form-row">
          <div className="form-group">
            <label>Name & Address of Employer:</label>
            <input
              type="text"
              value="XYZ Corporation, 789 Oak Rd, Workcity, USA 13579"
            />
          </div>
          <div className="form-group">
            <label>Self Employed:</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" /> Yes
              </label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Years on this job:</label>
            <input type="number" value="7" />
          </div>
          <div className="form-group">
            <label>Position/Title/Type of Business:</label>
            <input type="text" value="Senior Manager / Technology" />
          </div>
          <div className="form-group">
            <label>Business Phone:</label>
            <input type="tel" value="(555) 987-6543" />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">IX. ACKNOWLEDGEMENT AND AGREEMENT</div>
        <div className="acknowledgement">
          <p>
            Each of the undersigned specifically represents to Lender and to
            Lender's actual or potential agents, brokers, processors, attorneys,
            insurers, servicers, successors and assigns and agrees and
            acknowledges that: (1) the information provided in this application
            is true and correct as of the date set forth opposite my signature
            and that any intentional or negligent misrepresentation of this
            information contained in this application may result in civil
            liability, including monetary damages, to any person who may suffer
            any loss due to reliance upon any misrepresentation that I have made
            on this application, and/or in criminal penalties including, but not
            limited to, fine or imprisonment or both under the provisions of
            Title 18, United States Code, Sec. 1001, et seq.; (2) the loan
            requested pursuant to this application (the "Loan") will be secured
            by a mortgage or deed of trust on the property described in this
            application; (3) the property will not be used for any illegal or
            prohibited purpose or use; (4) all statements made in this
            application are made for the purpose of obtaining a residential
            mortgage loan; (5) the property will be occupied as indicated in
            this application; (6) the Lender, its servicers, successors or
            assigns may retain the original and/or an electronic record of this
            application, whether or not the Loan is approved; (7) the Lender and
            its agents, brokers, insurers, servicers, successors, and assigns
            may continuously rely on the information contained in the
            application, and I am obligated to amend and/or supplement the
            information provided in this application if any of the material
            facts that I have represented herein should change prior to closing
            of the Loan; (8) in the event that my payments on the Loan become
            delinquent, the Lender, its servicers, successors or assigns may, in
            addition to any other rights and remedies that it may have relating
            to such delinquency, report my name and account information to one
            or more consumer reporting agencies; (9) ownership of the Loan
            and/or administration of the Loan account may be transferred with
            such notice as may be required by law; (10) neither Lender nor its
            agents, brokers, insurers, servicers, successors or assigns has made
            any representation or warranty, express or implied, to me regarding
            the property or the condition or value of the property; and (11) my
            transmission of this application as an "electronic record"
            containing my "electronic signature," as those terms are defined in
            applicable federal and/or state laws (excluding audio and video
            recordings), or my facsimile transmission of this application
            containing a facsimile of my signature, shall be as effective,
            enforceable and valid as if a paper version of this application were
            delivered containing my original written signature.
          </p>
          <p>
            Acknowledgement. Each of the undersigned hereby acknowledges that
            any owner of the Loan, its servicers, successors and assigns, may
            verify or reverify any information contained in this application or
            obtain any information or data relating to the Loan, for any
            legitimate business purpose through any source, including a source
            named in this application or a consumer reporting agency.
          </p>
        </div>
        <div className="signature">
          <div className="signature-box">
            <div>Borrower's Signature</div>
            <div>X John Doe</div>
            <div>Date: 10/18/2024</div>
          </div>
          <div className="signature-box">
            <div>Co-Borrower's Signature</div>
            <div>X Jane Doe</div>
            <div>Date: 10/18/2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageApplication;
