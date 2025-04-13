export interface Photo {
  name: string;
  filepath: string;
  thumbpath: string;
  createdAt: string;
}

export interface Contract {
  no: string;
  issue_date: string;
}

export interface Organization {
  id: string;
  contactId: string;
  name: string;
  businessEntity: string;
  contract: Contract;
  type: string[];
  photos: Photo[];
}

export interface Contact {
  id: string;
  lastname: string;
  firstname: string;
  phone: string;
  email: string;
}
