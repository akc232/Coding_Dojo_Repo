export class User {
   constructor(
      public id: number = null,
      public firstName: string= "",
      public lastName: string= "",
      public password: string= "",
      public conPass: string= "",
      public street: string= "",
      public unit: string="",
      public city: string= "",
      public state: string= "",
      public created_at: Date = new Date(),
      public updated_at: Date = new Date()
   ){}
}
