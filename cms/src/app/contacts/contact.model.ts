export class contact {
  public contactId: number;
  public name: string;
  public email: string;
  public phone: number;
  public imageUrl: string;
  public group: string;

  constructor( contactId: number, name: string, email: string, phone: number, imageUrl: string, group: string) {
    this.name = name;
    this.contactId = contactId;
    this.email = email;
    this.phone = phone;
    this.imageUrl = imageUrl;
    this.group = group;
  }
}
