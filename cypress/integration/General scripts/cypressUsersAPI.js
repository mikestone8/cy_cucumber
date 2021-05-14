/// <reference types="Cypress" />
describe('APItoken', () => {
    it('POST', () =>{
      window.accessToken;
        cy.request({
          method: 'POST',
          url: 'https://idcs-b69eb966bfe445f1ae205eeb77340542.identity.oraclecloud.com/oauth2/v1/token',
          headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Authorization': 'Basic NjE3MTIzN2I2YjI3NGE0NWI0OGQ0YTk1ZTQyYTNkNWY6ZjdmZTZmNDgtZjNhOC00MzgyLWE4NmEtYzkyMDk3MTY2MGRj'
          },
          body: {
            'grant_type': 'client_credentials',
            'scope': 'https://api.test.retail.sse.co.uk/esbApi https://api.test.retail.sse.co.uk/esbApi/onboardingApi https://api.test.retail.sse.co.uk/csApi/meterPoint',
          },
        },
        ).then((response) => {
          cy.log(response.body)
          expect(response.body).to.have.property('access_token')
        }).its('body.access_token')
          .then((accessToken)=>{
            expect(accessToken).to.be.toString()
            cy.log(accessToken) 
            window.accessToken=accessToken
          })
                    }
      )
      it('POST', () =>{
      cy.request({
        method: 'POST',
        url: 'https://api.test.retail.sse.co.uk/esbApi/onboardingApi/V1/api/onboarding',
        headers: {'Content-type': 'application/json', 'Authorization': 'Bearer ' + accessToken},
        body: {   pravdaId: "TILIPRVD4531",
                  instructionType: "cos",
                  partnerBranchId: "partner_migration_id",
                  partnerTopLevelName: "Top Level Partner",
                  property : {coolingOffEndDate:"2021-05-28", fuelIdentifiedAtProperty:"D",
                    // location will be a subObject of property:
                                  location: {
                                  houseName : "Orro",
                                  houseNumber : "112374",
                                  address1 : "Nelson Mandela House",
                                  address2 : "Polecat Drive",
                                  address3 : "London",
                                  address4 : "Greater London",
                                  postcode : "SE24XF",
                                  UDPRN : "123456789"
                                            },
                                numberOfBedrooms: 5,
                                smartMeterBookingPreferredDay: "friday",
                                smartMeterBookingPreferredSlot: "afternoon"
                            },
                  primaryTenant: {
                    agreementDate: "2020-07-11",
                    dateOfBirth: "1996-01-01",
                    emailAddress: "tester.tenant_2@testing.test",
                    firstName: "Jeremiah",
                    lastName: "Mandalorian",
                    mobile: "0777777772",
                    moveInDate: "2020-07-10",
                    preferredMethodOfContact: "text",
                    salutation: "Mr",
                    marketingConsentEmail: true,
                    marketingConsentPhone: false,
                    marketingConsentPost: true,
                    marketingConsentSMS: false,
                    creditCheckConsent: true,
                    occupancyStatus: "tenant",
                      correspondenceAddress: {
                      houseName: "Wisteria Lodge",
                      houseNumber: "74B",
                      address1: "Loxwood Avenue",
                      address2: "Midhurst",
                      address3: "West Sussex",
                      address4: "United Kingdom",
                      postcode: "GU21 6RF",
                      udprn: "4584601"
                                }
                            },  
                    additionalTenants: [
                              {
                                emailAddress: "addition_1.tenant@testing.test",
                                firstName: "Addition_1",
                                lastName: "Tenant",
                                mobile: "07000000002",
                                salutation: "Rev"
                              },
                              {
                                emailAddress: "addition_2.tenant@testing.test",
                                firstName: "Addition_2",
                                lastName: "Tenant2",
                                mobile: "07000000003",
                                salutation: "Mr"
                              }
                            ],
                    landlord: {
                              address: "101 Landlord Avenue, Landlord Locality, Landlordville, CD1 2CD",
                              emailAddress: "tester.landlord@landlord.testing",
                              firstName: "David",
                              lastName: "Soul",
                              phone: "01243888999",
                              salutation: "Ms"
                            },
                    fuels: [
                              {
                                fuelType: "E",
                                customerAccountId: "1234567890",
                                customerAccountIdPreviousTenant: "",
                                supplies: [
                                  {
                                    MPXN: "2012345678901",
                                    MSN: "K1570072",
                                    profileClass: "01",
                                    meterTimeSwitchCode: "835",
                                    lineLossFactor: "014",
                                    dccServiceFlag: "S",
                                    registerReads: [
                                      {
                                        id: "1",
                                        type: "u",
                                        value: 13905,
                                        date: "2020-07-10"
                                      }
                                    ]
                                  }
                                ],
                    servicePlan: {
                        bankAccountNumber: "12345678",
                        bankAccountName: "Mr W Craven",
                        bankSortCode: "102030",
                        servicePlanInvoiceDescription: "Service plan description",
                        servicePlanId: "Service plan ID",
                        servicePlanAgreementDate: "2020-07-06",
                        monthlyDDAmount: 35,
                        preferredDDPaymentDay: 19,
                        UsageU: 0,
                        UsageD: 0,
                        UsageN: 0,
                        UsageG: 0,
                        annualSpend: 1527
                                }
                              }
                            ]
                        },
                 }
                )
                }
        )
        it('obCot', () =>{
          cy.log(window.obCot)
        })
})
  