"use strict";(self.webpackChunkTalentManagement=self.webpackChunkTalentManagement||[]).push([[548],{6548:(S,u,a)=>{a.r(u),a.d(u,{EmployeeModule:()=>q});var d=a(6814),m=a(3999),U=a(4016),i=a(627),Z=a(185),t=a(9212),g=a(5821),y=a(4788),h=a(7029);function T(e,s){if(1&e){const n=t.EpF();t._uU(0,"\n            "),t.TgZ(1,"tr",9),t.NdJ("click",function(){const O=t.CHM(n).$implicit,F=t.oxw(2);return t.KtG(F.wholeRowClick(O))}),t._uU(2,"\n              "),t.TgZ(3,"td"),t._uU(4),t.qZA(),t._uU(5,"\n              "),t.TgZ(6,"td"),t._uU(7),t.qZA(),t._uU(8,"\n              "),t.TgZ(9,"td"),t._uU(10),t.qZA(),t._uU(11,"\n              "),t.TgZ(12,"td"),t._uU(13),t.qZA(),t._uU(14,"\n            "),t.qZA(),t._uU(15,"\n            ")}if(2&e){const n=s.$implicit;t.xp6(4),t.Oqu(n.lastName),t.xp6(3),t.Oqu(n.firstName),t.xp6(3),t.Oqu(n.employeeTitle),t.xp6(3),t.Oqu(n.email)}}function _(e,s){if(1&e&&(t._uU(0,"\n          "),t.TgZ(1,"tbody"),t._uU(2,"\n            "),t.SjG(3,T,16,4,null,null,t.x6l),t.qZA(),t._uU(5,"\n          ")),2&e){const n=t.oxw();t.xp6(3),t.wJu(n.employees)}}function v(e,s){1&e&&(t._uU(0,"\n          "),t.TgZ(1,"tbody"),t._uU(2,"\n            "),t.TgZ(3,"tr"),t._uU(4,"\n              "),t.TgZ(5,"td",10),t._uU(6,"No data!"),t.qZA(),t._uU(7,"\n            "),t.qZA(),t._uU(8,"\n          "),t.qZA(),t._uU(9,"\n          "))}const f=new Z.Yd("Employee");let p=(()=>{class e{constructor(n,o,l){this.apiHttpService=n,this.apiEndpointsService=o,this.modalService=l,this.dtOptions={},this.employees=[],this.message=""}wholeRowClick(n){this.openModal("Employee Detail",n),f.debug("Whole row clicked.",n)}ngOnInit(){this.dtOptions={pagingType:"full_numbers",pageLength:10,serverSide:!0,processing:!0,ajax:(n,o)=>{this.apiHttpService.post(this.apiEndpointsService.postEmployeesPagedEndpoint(),n).subscribe(l=>{this.employees=l.data,o({recordsTotal:l.recordsTotal,recordsFiltered:l.recordsFiltered,data:[]})})},columns:[{title:"Last",data:"lastName"},{title:"First",data:"firstName"},{title:"Title",data:"employeeTitle"},{title:"Email",data:"email"}]}}openModal(n,o){this.modalService.OpenEmployeeDetailDialog(n,o)}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(g.E),t.Y36(y.n),t.Y36(h.Z))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-employee-list"]],standalone:!0,features:[t.jDz],decls:47,vars:3,consts:[[1,"container-fluid","mt-3"],[1,"card"],[1,"card-header"],[1,"float-start"],[1,"text-secondary"],[1,"card-body"],[1,"row"],["datatable","",1,"table","table-hover",3,"dtOptions"],[1,"card-footer"],[3,"click"],["colspan","4",1,"no-data-available"]],template:function(o,l){1&o&&(t.TgZ(0,"div",0),t._uU(1,"\n  "),t.TgZ(2,"div",1),t._uU(3,"\n    "),t.TgZ(4,"div",2),t._uU(5,"\n      "),t.TgZ(6,"div",3),t._uU(7,"\n        "),t.TgZ(8,"h3",4),t._uU(9,"Employee"),t.qZA(),t._uU(10,"\n      "),t.qZA(),t._uU(11,"\n    "),t.qZA(),t._uU(12,"\n    "),t.TgZ(13,"div",5),t._uU(14,"\n      "),t.TgZ(15,"div",6),t._uU(16,"\n        "),t.TgZ(17,"table",7),t._uU(18,"\n          "),t.TgZ(19,"thead"),t._uU(20,"\n            "),t.TgZ(21,"tr"),t._uU(22,"\n              "),t.TgZ(23,"th"),t._uU(24,"Last"),t.qZA(),t._uU(25,"\n              "),t.TgZ(26,"th"),t._uU(27,"First"),t.qZA(),t._uU(28,"\n              "),t.TgZ(29,"th"),t._uU(30,"Title"),t.qZA(),t._uU(31,"\n              "),t.TgZ(32,"th"),t._uU(33,"Email"),t.qZA(),t._uU(34,"\n            "),t.qZA(),t._uU(35,"\n          "),t.qZA(),t._uU(36,"\n          "),t.YNc(37,_,6,0)(38,v,10,0),t.qZA(),t._uU(39,"\n      "),t.qZA(),t._uU(40,"\n    "),t.qZA(),t._uU(41,"\n    "),t.TgZ(42,"div",8),t._uU(43,"Hint: Searchable columns are Number, Title and Description"),t.qZA(),t._uU(44,"\n  "),t.qZA(),t._uU(45,"\n"),t.qZA(),t._uU(46,"\n")),2&o&&(t.xp6(17),t.Q6J("dtOptions",l.dtOptions),t.xp6(20),t.um2(37,0!==(null==l.employees?null:l.employees.length)?37:-1),t.xp6(1),t.um2(38,0===(null==l.employees?null:l.employees.length)?38:-1))},dependencies:[i.T,i.G],styles:["table.dataTable td.dataTables_empty{display:none}"]})}return e})(),r=(()=>{class e{constructor(){this.active=1}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-employee"]],standalone:!0,features:[t.jDz],decls:2,vars:0,template:function(o,l){1&o&&(t._UZ(0,"app-employee-list"),t._uU(1,"\n"))},dependencies:[p]})}return e})();var c=a(2787),A=a(6290);const E=[{path:"",component:r,data:{title:(0,A.J)("Employee")}}];let C=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(E),c.Bz]})}return e})();var x=a(6806);let q=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[d.ez,C,x.Oz,m.aw,U.m8,i.T,r,p]})}return e})()}}]);