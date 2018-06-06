import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { APIKeysService } from './api/aPIKeys.service';
import { AccountsService } from './api/accounts.service';
import { AnalyticsService } from './api/analytics.service';
import { DatasetsService } from './api/datasets.service';
import { FingerprintService } from './api/fingerprint.service';
import { ImagesService } from './api/images.service';
import { JobsService } from './api/jobs.service';
import { LayersService } from './api/layers.service';
import { LensesService } from './api/lenses.service';
import { NotificationsService } from './api/notifications.service';
import { PublicService } from './api/public.service';
import { SDKService } from './api/sDK.service';
import { SearchResultsService } from './api/searchResults.service';
import { ServicesService } from './api/services.service';
import { SpacesService } from './api/spaces.service';
import { WorkflowsService } from './api/workflows.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    APIKeysService,
    AccountsService,
    AnalyticsService,
    DatasetsService,
    FingerprintService,
    ImagesService,
    JobsService,
    LayersService,
    LensesService,
    NotificationsService,
    PublicService,
    SDKService,
    SearchResultsService,
    ServicesService,
    SpacesService,
    WorkflowsService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
