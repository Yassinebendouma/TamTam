import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = "TamTam";
  
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  modalRef: BsModalRef; 

  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
 
    }
  

}
