export type WorkDTO = {
   id: number;
   name: string;
   status: number;
   category: {
      id: number;
      name: string;
      description: string;
   };
   client: {
      id: number;
      name: string;
      phone: string;
      address: string;
   };
   valor: number | null;
   pageable: {
      sort: {
         empty: boolean;
         unsorted: boolean;
         sorted: boolean;
      };
      offset: number;
      pageSize: number;
      pageNumber: number;
      paged: boolean;
      unpaged: boolean;
   };
   totalPages: number;
   size: number;
   numberOfElements: number;
};

