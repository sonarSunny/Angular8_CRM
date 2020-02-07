import { Routes } from '@angular/router';

import { DashboardComponent }  from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UsersComponent } from '../../pages/users/users.component';
import { StatusComponent} from '../../pages/status/status.component';
import { RegistrationComponent} from '../../pages/registration/registration.component'


export const AdminLayoutRoutes: Routes = [    
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'users',          component: UsersComponent},
    { path: 'status',         component: StatusComponent},
    { path: 'registration',   component: RegistrationComponent},    
    

];
