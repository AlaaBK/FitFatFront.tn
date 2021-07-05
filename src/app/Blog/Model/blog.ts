export class Blog{
    title : string;
    createdBy : string;
    content : string;
    publique : string;


  constructor(title: string, createdBy: string, content: string, publique: string) {
    this.title = title;
    this.createdBy = createdBy;
    this.content = content;
    this.publique = publique;
  }
}
