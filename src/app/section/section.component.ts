import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
 // appid: string = "teste";
  public appid: string = "teste";
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  modalRef: BsModalRef; 

  openModal(template: TemplateRef<any>,item,appid) {
      this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
      this.appid=item;
      console.log("Checking passed item: ",item);
    }
}
