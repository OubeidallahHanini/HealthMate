import { Routes } from "@angular/router";
import { ChatComponent } from "./chat/chat.component";

export const ChatRoutes : Routes = [

    {
        path: '',
        children: [
          {
            path: '',
            component: ChatComponent ,
          },
  
         
  
            
         
  
         
        ],
      },
    ];