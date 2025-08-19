import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.scss']
})
export class NewpageComponent implements OnInit {
  public test = 'value-changed-1';
  public exampleData: any [] = [];
  array: any [] = [];
  selectedTab = -1
  constructor() { }

  ngOnInit(): void {
    this.exampleData = [
      {
        id: '1',
        text: 'Enables entry into new market segments',
        formula:`Customer's Current Product Revenue * Improvement of entry into new market segments * Customer's Contribution Margin`
      },
      {
        id: '2',
        text: 'Enables faster introduction of new products',
        formula:`Customer's Current New Product Revenue * Improvement of faster introduction of new products * Customer's Contribution Margin`
      },
      {
        id: '3',
        text: 'Enables product price increases',
        formula:`Customer's Current Product Revenue * Improvement of product price increases * Customer's Contribution Margin`
      },
      {
        id: '4',
        text: 'Improves customer access or convenience',
        formula:`Customer's Current Product Revenue * Improvement of customer access or convenience * Customer's Contribution Margin`
      },
      {
        id: '5',
        text: 'Improves distribution capacity',
        formula:`Customer's Current Product Revenue * Improvement of distribution capacity * Customer's Contribution Margin`
      },
      {
        id: '6',
        text: 'Improves distribution turnaround time',
        formula:`Customer's Current Product Revenue * Improvement of distribution turnaround time * Customer's Contribution Margin`
      },
      {
        id: '7',
        text: 'Improves success rate of new product launches',
        formula:`Improvement of effectiveness of promotions * Improvement of success rate of new product launches * Customer's Contribution Margin`
      },
      {
        id: '8',
        text: 'Increases average customer lifetime value',
        formula:`Customer's Current Average Customer Lifetime Value * Improvement of average customer lifetime value * Customer's Contribution Margin`
      },
      {
        id: '9',
        text: 'Increases average size of orders',
        formula:`Customer's Current Product Revenue * Improvement of average size of orders * Customer's Contribution Margin`
      },
      {
        id: '10',
        text: 'Increases customer upselling',
        formula:`Customer's Current Product Revenue * Improvement of customer upselling * Customer's Contribution Margin`
      },
      {
        id: '11',
        text: 'Increases effectiveness of promotions',
        formula:`Customer's Current Product Revenue * Change from Using Offering * Customer's Contribution Margin`
      },
      {
        id: '12',
        text: 'Increases employee productivity',
        formula:`Customer's Current Product Revenue * Improvement of employee productivity * Customer's Contribution Margin`
      },
      {
        id: '13',
        text: 'Increases Inventory Turnover',
        formula:`Current inventory holding costs * Change from Using Offering`
      },
      {
        id: '14',
        text: 'Increases market share',
        formula:`Customer's Current Product Revenue * Improvement of market share * Customer's Contribution Margin`
      },
      {
        id: '15',
        text: 'Increases number of customer referrals',
        formula:`Customer's Current Product Revenue * Improvement of number of customer referrals * Customer's Contribution Margin`
      },
      {
        id: '16',
        text: 'Increases ordering frequency',
        formula:`Customer's Current Product Revenue * Improvement of ordering frequency * Customer's Contribution Margin`
      },
      {
        id: '17',
        text: 'Increases production output',
        formula:`Customer's Current Product Revenue * Improvement of production output * Customer's Contribution Margin`
      },
      {
        id: '18',
        text: 'Increases repeat/return business',
        formula:`Customer's Current Product Revenue * Improvement of repeat/return business * Customer's Contribution Margin`
      },
      {
        id: '19',
        text: 'Increases sales of complementary products and services',
        formula:`Customer's Current Complementary Product Revenue * Improvement of sales of complementary products and services * Customer's Contribution Margin`
      },
      {
        id: '20',
        text: 'Increases sales volume/growth of existing offers',
        formula:`Customer's Current Product Revenue * Improvement of sales volume/growth of existing offers * Customer's Contribution Margin`
      },
      {
        id: '21',
        text: 'Increases total payables and time to payment',
        formula:`Customer's Current Accounts Payable * Improvement of total payables and time to payment * Customer's Current Cost of Capital`
      },
      {
        id: '22',
        text: 'Reduce Air and Gas Usage Costs',
        formula:`Air and Gas Cost * Air and Gas Usage Change`
      },
      {
        id: '23',
        text: 'Reduce Clean Up Costs',
        formula:`Labor Cleanup Rate * Labor Cleanup Hours * Reduction of Clean Up Costs`
      },
      {
        id: '24',
        text: 'Reduce Design Costs',
        formula:`( Design Engineering Rate * Design Engineering Hours ) + ( Testing Rate * Testing Hours ) + ( Test Equipment Cost / Number of Units ) + Other Design & Engineering Costs`
      },
      {
        id: '25',
        text: 'Reduce Disposal Costs',
        formula:`Labor Disposal Rate * Labor Disposal Hours * Reduction of Disposal Costs`
      },
      {
        id: '26',
        text: 'Reduce downtime costs',
        formula:`Downtime Value per Hour * Downtime Hours * Reduction of downtime costs`
      },
      {
        id: '27',
        text: 'Reduce Electricity Costs',
        formula:`Electricity Cost (kw) * Electricity Usage Change (kw)`
      },
      {
        id: '28',
        text: 'Reduce Expediting Costs',
        formula:`Expediting Rate * Expediting Hours * Reduction of Expediting Costs`
      },
      {
        id: '29',
        text: 'Reduce Floorspace Costs',
        formula:`Floorspace (Sq Ft) * Floorspace Cost per Sq Ft * Floorspace Years`
      },
      {
        id: '30',
        text: 'Reduce Freight Costs',
        formula:`( ( Freight Rate (Wgt) * Freight Area ) + ( Freight Rate (Distance) * Freight Distance ) ) * Reduction of Freight Costs`
      },
      {
        id: '31',
        text: 'Reduce Fuel Usage Costs',
        formula:`Fuel Cost (gal) * Fuel Usage Change (gal)`
      },
      {
        id: '32',
        text: 'Reduce Labor Assembly Costs',
        formula:`Labor Assembly Rate * Labor Assembly Hours * Reduction of Labor Assembly Costs`
      },
      {
        id: '33',
        text: 'Reduce Labor Install Cost',
        formula:`Labor Install Rate * Labor Install Hours * Reduction of Labor Install Cost`
      },
      {
        id: '34',
        text: 'Reduce Labor Rework Costs',
        formula:`Labor Rework Rate * Labor Rework Hours * Reduction of Labor Rework Costs`
      },
      {
        id: '35',
        text: 'Reduce Labor Setup Costs',
        formula:`Labor Setup Rate * Labor Setup Hours * Reduction of Labor Setup Costs`
      },
      {
        id: '36',
        text: 'Reduce Lifetime Ownership Costs',
        formula:`( Product Cost * Percent Life Increase ) + ( Number of Spares Reduced * Cost per Spare ) + ( Service Reduced * Cost per Service ) + ( Lost Production * Value per Product ) + Change out Costs + Change in Maintenance Costs + Other Lifetime Ownership Costs`
      },
      {
        id: '37',
        text: 'Reduce Litigation Costs',
        formula:`Potential Litigation Costs * Reduction of Litigation Costs`
      },
      {
        id: '38',
        text: 'Reduce Lost Sales',
        formula:`Lost Sales * Gross Margin * Reduction of Lost Sales`
      },
      {
        id: '39',
        text: 'Reduce Material Inventory Costs',
        formula:`( ( number of gallons of material inventory * cost per gallon of material ) / number of units produced ) * Reduction of Material Inventory Costs * Customer's Current Cost of Capital`
      },
      {
        id: '40',
        text: 'reduce production line repair cost',
        formula:`cost of product line repair * incidence of repair (quality defects) * Reduction of production line repair cost`
      },
      {
        id: '41',
        text: 'Reduce Receiving Costs',
        formula:`Annual Receiving Charge * Percent Reduction - Annual Receiving Charge`
      },
      {
        id: '42',
        text: 'Reduce Warehousing Costs',
        formula:`Warehousing Rate * Warehousing Hours * Reduction of Warehousing Costs`
      },
      {
        id: '43',
        text: 'Reduce Warranty Costs',
        formula:`Warranty Failures Avoided * Cost per Warranty Failure`
      },
      {
        id: '44',
        text: 'Reduce Waste and Energy Costs',
        formula:`( Electricity Usage Change (kw) * Electricity Cost (kw) ) + ( Water Usage Change (gal) * Water cost (gal) ) + ( Air and Gas Usage Change * Air and Gas Cost ) + ( Fuel Usage Change (gal) * Fuel Cost (gal) ) + ( Weight Change * Weight Cost ) + Fines or Credit Changed + Other Waste and Energy Cost Reductions`
      },
      {
        id: '45',
        text: 'reduce waste disposal costs',
        formula:`disposal cost per pound of waste * Reduction of waste disposal costs`
      },
      {
        id: '46',
        text: 'Reduce Water Usage Costs',
        formula:`Water cost (gal) * Water Usage Change (gal)`
      },
      {
        id: '47',
        text: 'Reduces accounts receivable asset',
        formula:`Customer's Current Accounts Receivable * Reduction of accounts receivable asset * Customer's Current Cost of Capital`
      },
      {
        id: '48',
        text: 'Reduces administrative and sales processing costs',
        formula:`Customer's Current Sales Administrative Costs * Reduction of administrative and sales processing costs`
      },
      {
        id: '49',
        text: 'Reduces administrative costs',
        formula:`Customer's Current Administrative Costs * Reduction of administrative costs`
      },
      {
        id: '50',
        text: 'Reduces application development costs',
        formula:`Customer's Current Development Costs * Reduction of application development costs`
      },
      {
        id: '51',
        text: 'Reduces billing errors',
        formula:`Customer's Current Billing Error Costs * Change from Using Offering`
      },
      {
        id: '52',
        text: 'Reduces capital expenditures',
        formula:`Customer's Current Capital Expenditures * Reduction of capital expenditures`
      },
      {
        id: '53',
        text: 'Reduces channel management costs',
        formula:`Customer's Current Channel Management Costs * Reduction of channel management costs`
      },
      {
        id: '54',
        text: 'Reduces channel throughput costs',
        formula:`Customer's Current Channel Costs * Reduction of channel throughput costs`
      },
      {
        id: '55',
        text: 'Reduces compliance costs',
        formula:`Customer's Current Compliance Costs * Reduction of compliance costs`
      },
      {
        id: '56',
        text: 'Reduces configuration or integration costs',
        formula:`Customer's Current Customization Costs * Reduction of configuration or integration costs`
      },
      {
        id: '57',
        text: 'Reduces cost of replacement parts',
        formula:`Cost of New Parts * Percent Reduction`
      },
      {
        id: '58',
        text: 'Reduces cost of supply delays',
        formula:`Cost of delay in supply per month (part not available) * Number of months delay * Reduction of cost of supply delays`
      },
      {
        id: '59',
        text: 'Reduces customer acquisition costs',
        formula:`Customer's Current Customer Acquisition Costs * Reduction of customer acquisition costs`
      },
      {
        id: '60',
        text: 'Reduces customer claim payments',
        formula:`Customer's Current Customer Claim Costs * Reduction of customer claim payments`
      },
      {
        id: '61',
        text: 'Reduces customer retention costs',
        formula:`Customer's Current Customer Retention Costs * Reduction of customer retention costs`
      },
      {
        id: '62',
        text: 'Reduces defect costs',
        formula:`Customer's Current Defect Costs * Reduction of defect costs`
      },
      {
        id: '63',
        text: 'Reduces distribution administrative costs',
        formula:`Customer's Current Administrative Costs * Reduction of distribution administrative costs`
      },
      {
        id: '64',
        text: 'Reduces downtime costs',
        formula:`Customer's Current Cost Downtime Costs * Reduction of downtime costs`
      },
      {
        id: '65',
        text: 'Reduces employee recruiting costs',
        formula:`Customer's Current Recruiting Costs * Reduction of employee recruiting costs`
      },
      {
        id: '66',
        text: 'Reduces employee salary and benefits costs',
        formula:`Customer's Current Salary and Benefit Costs * Reduction of employee salary and benefits costs`
      },
      {
        id: '67',
        text: 'Reduces energy costs',
        formula:`Customer's Current Energy Costs * Reduction of energy costs`
      },
      {
        id: '68',
        text: 'Reduces equipment rental costs',
        formula:`Customer's Current Equipment Costs * Reduction of equipment rental costs`
      },
      {
        id: '69',
        text: 'Reduces error rates',
        formula:`Customer's Current Cost of Errors * Reduction of error rates`
      },
      {
        id: '70',
        text: 'Reduces finished goods inventory',
        formula:`Customer's Current Finished Goods Inventory * Reduction of finished goods inventory * Customer's Current Cost of Capital`
      },
      {
        id: '71',
        text: 'Reduces hiring costs',
        formula:`Customer's Current Recruiting Costs * Reduction of hiring costs`
      },
         {
        id: '72',
        text: 'Reduces installation costs',
        formula:`Installation labor costs (per hour) * ( Standard installation time (hours) - Reduction in installation time (hours) )`
      },
      {
        id: '73',
        text: 'Reduces insurance costs',
        formula:`Customer's Current Insurance Costs * Reduction of insurance costs`
      },
      {
        id: '74',
        text: 'Reduces IT hardware costs',
        formula:`Customer's Current IT Hardware Costs * Reduction of IT hardware costs`
      },
      {
        id: '75',
        text: 'Reduces IT infrastructure costs',
        formula:`Customer's Current IT Infrastructure Costs * Reduction of IT infrastructure costs`
      },
      {
        id: '76',
        text: 'Reduces IT labor costs',
        formula:`Customer's Current IT Labor Costs * Reduction of IT labor costs`
      },

      {
        id: '77',
        text: 'Reduces IT maintenance costs',
        formula:`Customer's Current IT Maintenance Costs * Reduction of IT maintenance costs`
      },
      {
        id: '78',
        text: 'Reduces IT middleware costs',
        formula:`Customer's Current IT Middleware Costs * Reduction of IT middleware costs`
      },
      {
        id: '79',
        text: 'Reduces labor costs',
        formula:`Customer's Current Production Labor Costs * Reduction of labor costs`
      },
      {
        id: '80',
        text: 'Reduces legal damages/fines',
        formula:`Customer's Current Damages * Reduction of legal damages/fines`
      },
      {
        id: '81',
        text: 'Reduces legal fees',
        formula:`Customer's Current Legal Fees * Reduction of legal fees`
      },
      {
        id: '82',
        text: 'Reduces lost revenue',
        formula:`Customer's Current Lost Revenue * Reduction of lost revenue * Customer's Contribution Margin`
      },
      {
        id: '83',
        text: 'Reduces maintenance costs',
        formula:`Customer's Current Maintenance Costs * Reduction of maintenance costs`
      },
      {
        id: '84',
        text: 'Reduces management or supervision time',
        formula:`Customer's Current Management Costs * Reduction of management or supervision time`
      },
      {
        id: '85',
        text: 'Reduces marketing communication costs',
        formula:`Customer's Current Marcom Costs * Reduction of marketing communication costs`
      },
      {
        id: '86',
        text: 'Reduces materials costs',
        formula:`Customer's Current Materials Costs * Reduction of materials costs`
      },
      {
        id: '87',
        text: 'Reduces miscellaneous IT costs',
        formula:`Customer's Current Other IT Costs * Reduction of miscellaneous IT costs`
      },
      {
        id: '88',
        text: 'Reduces miscellaneous operations costs',
        formula:`Customer's Current Miscellaneous Operations Costs * Reduction of miscellaneous operations costs`
      },
      {
        id: '89',
        text: 'Reduces miscellaneous sales costs',
        formula:`Customer's Current Sales Costs * Reduction of miscellaneous sales costs`
      },
      {
        id: '90',
        text: 'Reduces networking/communications costs',
        formula:`Customer's Current Networking Costs * Reduction of networking/communications costs`
      },
      {
        id: '91',
        text: 'Reduces order errors costs',
        formula:`Reduction of labor costs (Chicago detailer) * Reduction of order errors costs`
      },
      {
        id: '92',
        text: 'Reduces outside services costs',
        formula:`Customer's Current Outside Services Costs * Reduction of outside services costs`
      },
      {
        id: '93',
        text: 'Reduces outsourcing costs',
        formula:`Customer's Current Outsourcing Costs * Reduction of outsourcing costs`
      },
      {
        id: '94',
        text: 'Reduces product development costs',
        formula:`Customer's Current Product Development Costs * Reduction of product development costs`
      },
      {
        id: '95',
        text: 'Reduces product returns or refunds',
        formula:`Customer's Current Returns Costs * Reduction of product returns or refunds`
      },
      {
        id: '96',
        text: 'Reduces property, plant, and equipment',
        formula:`Customer's Current PPE Costs * Reduction of property, plant, and equipment`
      },
      {
        id: '97',
        text: 'Reduces regulatory/reporting costs',
        formula:`Customer's Current Regulatory Costs * Reduction of regulatory/reporting costs`
      },
      {
        id: '98',
        text: 'Reduces risk exposure',
        formula:`Estimated cost of catastrophic risk * Estimate of risk probability * Reduction of risk probability`
      },
      {
        id: '99',
        text: 'Reduces scrap costs',
        formula:`Customer's Current Scrap Costs * Reduction of scrap costs`
      },
      {
        id: '100',
        text: 'Reduces service center labor costs',
        formula:`Customer's Current Service Center Labor Costs * Reduction of service center labor costs`
      },
      {
        id: '101',
        text: 'Reduces shipment error costs',
        formula:`Customer's Current Shipment Error Costs * Reduction of shipment error costs`
      },
      {
        id: '102',
        text: 'Reduces shipping/freight costs',
        formula:`Customer's Current Shipping Costs * Reduction of shipping/freight costs`
      },
      {
        id: '103',
        text: 'Reduces SKUs in product line',
        formula:`Customer's Current SKU Inventory * Reduction of SKUs in product line * Customer's Current Cost of Capital`
      },
      {
        id: '104',
        text: 'Reduces software licensing costs',
        formula:`Customer's Current Licensing Costs * Reduction of software licensing costs`
      },
      {
        id: '105',
        text: 'Reduces temporary worker costs',
        formula:`Customer's Current Temporary Labor Costs * Reduction of temporary worker costs`
      },
      {
        id: '106',
        text: 'Reduces testing/QA costs',
        formula:`Customer's Current Testing Costs * Reduction of testing/QA costs`
      },
      {
        id: '107',
        text: 'Reduces the unit production costs',
        formula:`Customer's Current Unit Production Costs * Reduction of the unit production costs`
      },
      {
        id: '108',
        text: 'Reduces training costs',
        formula:`Customer's Current Training Costs * Reduction of training costs`
      },
      {
        id: '109',
        text: 'Reduces travel and entertainment costs',
        formula:`Customer's Current T&E Costs * Reduction of travel and entertainment costs`
      },
      {
        id: '110',
        text: 'Reduces unsuccessful product launches',
        formula:`Customer's Current Launch Failure Costs * Reduction of unsuccessful product launches`
      },
      {
        id: '111',
        text: 'Reduces worker compensation claims/costs',
        formula:`Customer's Current Workers' Comp Claims * Reduction of worker compensation claims/costs`
      },
      {
        id: '112',
        text: 'Reduces work-in-process inventory',
        formula:`Customer's Current WIP Inventory * Reduction of work-in-process inventory * Customer's Current Cost of Capital`
      },
    ];
   
}
showdownload = false
public valueChanged(event: any) {
  console.log('value changed: ' + event);
  this.selectedTab = event - 1
  console.log(event)
  console.log(this.selectedTab)
  this.showdownload = true

}

public modelChanged(event: any) {
  console.log('model changed: ' + event);
}
}