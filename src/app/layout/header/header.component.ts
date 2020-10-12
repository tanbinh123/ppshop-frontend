import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Language} from '../../translation/language.enum';
import {MatDialog} from '@angular/material/dialog';
import {SignupComponent} from '../../user/dialog/signup/signup.component';
import {LoginComponent} from '../../user/dialog/login/login.component';

@Component({
  selector: 'pps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lang: Language;
  Language = Language;

  constructor(private translate: TranslateService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  setLang(lang: Language): void {
    this.lang = lang;
    this.translate.use(lang.toLowerCase());
  }

  openSignupDialog(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent,
      {
        width: '500px'
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
