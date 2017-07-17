export class Document {
  public id: string;
  public name: string;
  public description: string;
  public url: string;

  constructor(id: string, name: string, description: string, url: string){
    this.id = id;
    this.name = name;
    this.description = description;
    this.url = url;

  }

}

// export class Document {
//   public id: number;
//   public name: string;
//   public description: string;
//   public url: string;
//   // public children: any;
//
//   constructor(documentID: number, name: string, description: string, url: string, children:any){
//     this.id = documentID;
//     this.name = name;
//     this.description = description;
//     this.url = url;
//     this.children = children;
//
//   }
//
// }
