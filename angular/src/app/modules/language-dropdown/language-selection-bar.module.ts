import { NgModule } from '@angular/core';
import { LanguageSelectionBarComponent } from './language-selection-bar.component';
import { LanguagePickerModule } from '@modules/language-picker/language-picker.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LanguageSelectionBarComponent],
  imports: [CommonModule, LanguagePickerModule],
  exports: [LanguageSelectionBarComponent],
})
export class LanguageSelectionBarModule {}
