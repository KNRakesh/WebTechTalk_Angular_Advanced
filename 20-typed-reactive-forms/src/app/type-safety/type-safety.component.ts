import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

interface productFormType {
  productName: FormControl<string | null>;
  brand: FormControl<string | null>;
  quantity: FormControl<number | null>;
  price: FormControl<number | null>;
}

@Component({
  selector: 'app-type-safety',
  imports: [ReactiveFormsModule],
  templateUrl: './type-safety.component.html',
  styleUrl: './type-safety.component.scss'
})
export class TypeSafetyComponent {

  // productForm: FormGroup;
  productForm: FormGroup<productFormType>;

  constructor(private fb: FormBuilder) {
    // this.productForm = this.fb.group({
    //   productName: this.fb.control(''),
    //   brand: this.fb.control(''),
    //   quantity: this.fb.control(''),
    //   price: this.fb.control(''),
    // })
    this.productForm = new FormGroup<productFormType>({
      productName: new FormControl<string | null>(''),
      brand: new FormControl<string | null>(''),
      quantity: new FormControl<number | null>(null),
      price: new FormControl<number | null>(null),
    });
  }

  onSubmit() {
    let productName = this.productForm.get('productName')?.value;
    let brand = this.productForm.get('brand')?.value;
    let quantity = this.productForm.get('quantity')?.value;
    let price = this.productForm.get('price')?.value;

    console.log(productName?.trim());
    console.log(brand?.trim());
    console.log(quantity);
    console.log(price);

    this.productForm.setValue({
      productName: 'Something',
      quantity: 20,
      price: 30,
      brand: 'abc'
    })

    this.productForm.patchValue({
      brand: 'SomethingElse'
    })
  }

}
