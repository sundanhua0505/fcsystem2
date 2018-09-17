import { Component, OnInit } from '@angular/core';
import { ParentEditComponent } from 'fccomponent2';
@Component({
  selector: 'sysdepartmentedit',
  templateUrl: './sysdepartmentedit.component.html',
  styles: [`
 
  `]
})
export class SysdepartmenteditComponent extends ParentEditComponent {
  constructor() {
    super("SYSTEM", "SYSDEPARTMENT");
  }
  /**
   * 初始化
   */
  init() {
    
  }
  /**
   * 新增
   * @param mainObj 
   */
  addNew(mainObj: any): boolean {
    return true;
  }
  /**
   * 事件
   * @param eventName 事件名
   * @param param 返回参数
   */
  event(eventName: string, param: any): void {

  }
  /**
   * 保存前验证
   */
  beforeSave(): boolean {
    return true;
  }
}