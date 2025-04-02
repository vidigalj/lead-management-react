import {LeadStatus} from './LeadStatus.tsx';

class Lead {
    id: string;
    firstName: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    createDate: Date;
    suburb: string;
    category: string;
    description: string;
    price: number;
    status: LeadStatus;
  
    constructor({
      id,
      firstName,
      createDate,
      fullName,
      phoneNumber,
      email,
      suburb,
      category,
      description,
      price,
      status,
    }: {
      id: string;
      firstName: string;
      fullName: string;
      phoneNumber: string;
      email: string;
      createDate: Date;
      suburb: string;
      category: string;
      description: string;
      price: number;
      status: LeadStatus;
    }) {
      
      this.id = id;
      this.firstName = firstName;
      this.createDate = new Date(createDate);;
      this.fullName = fullName;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.suburb = suburb;
      this.category = category;
      this.description = description;
      this.price = price;
      this.status = status;
    }
  
    getFormattedPrice(): string {
      return `${this.price.toFixed(2)}`;
    }
  }
  
  export default Lead;