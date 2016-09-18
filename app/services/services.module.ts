import { NgModule } from "@angular/core";
import { PhotoService } from "./photo.service";

@NgModule({})
export class ServicesModule {
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [ PhotoService ],
    }
  }
}

export {
  PhotoService,
}
