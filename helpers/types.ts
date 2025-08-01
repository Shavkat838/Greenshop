export  type Product={
     id?:string;
     name:string;
     images:string[];
     price:number;
     description:string;
     categoryId:string;
     userId:string;
}


export type Category={
    title:string;
    id?:number;
}


export  const BASE_IMAGE_URL =
  "https://utsgnlwgurhfevqnupci.supabase.co/storage/v1/object/public/greenpro//";