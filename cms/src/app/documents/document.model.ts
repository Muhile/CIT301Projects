export class Document {
  public documentId: string;
  public name: string;
  public description: string;
  public url: string;

  constructor(documentID: string, name: string, description: string, url: string){
    this.documentId = documentID;
    this.name = name;
    this.description = description;
    this.url = url;

  }

}

// export class Document {
//   public documentId: number;
//   public name: string;
//   public description: string;
//   public url: string;
//   // public children: any;
//
//   constructor(documentID: number, name: string, description: string, url: string, children:any){
//     this.documentId = documentID;
//     this.name = name;
//     this.description = description;
//     this.url = url;
//     this.children = children;
//
//   }
//
// }
