import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'foodbank-filter', loadChildren: './foodbank-filter/foodbank-filter.module#FoodbankFilterPageModule' },
  { path: 'donation-filter', loadChildren: './donation-filter/donation-filter.module#DonationFilterPageModule' },
  { path: 'usergroup', loadChildren: './usergroup/usergroup.module#UsergroupPageModule' },
  { path: 'organization', loadChildren: './organization/organization.module#OrganizationPageModule' },
  { path: 'boxinfo', loadChildren: './boxinfo/boxinfo.module#BoxinfoPageModule' },
  { path: 'announcement', loadChildren: './announcement/announcement.module#AnnouncementPageModule' },
  { path: 'recipient-form', loadChildren: './recipient-form/recipient-form.module#RecipientFormPageModule' },
  { path: 'donation-edit', loadChildren: './donation-edit/donation-edit.module#DonationEditPageModule' },
  { path: 'organization-form', loadChildren: './organization-form/organization-form.module#OrganizationFormPageModule' },
  { path: 'usergroup-form', loadChildren: './usergroup-form/usergroup-form.module#UsergroupFormPageModule' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'role', loadChildren: './role/role.module#RolePageModule' },
  { path: 'staff-form', loadChildren: './staff-form/staff-form.module#StaffFormPageModule' },
  { path: 'boxinfo-form', loadChildren: './boxinfo-form/boxinfo-form.module#BoxinfoFormPageModule' },
  { path: 'lock', loadChildren: './lock/lock.module#LockPageModule' },
  { path: 'audittrail', loadChildren: './audittrail/audittrail.module#AudittrailPageModule' }
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
