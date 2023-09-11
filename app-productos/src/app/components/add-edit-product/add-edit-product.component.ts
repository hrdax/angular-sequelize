import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit{
  form: FormGroup;
  id: number
  accion: string = 'Agregar'

  constructor(private fb: FormBuilder,
    private _productService: ProductService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
    })
    this.id = Number(aRoute.snapshot.paramMap.get('id'))
  }
  addProduct(){
    const product: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock,
    }

    if(this.id !== 0){
      product.id = this.id
      this._productService.updateProduct(this.id, product).subscribe(() => {
      this.router.navigate(['/'])
    })
    } else {
      this._productService.saveProduct(product).subscribe(() => {})
      this.router.navigate(['/'])
    }
  }
  
  getProduct(id: number){
    this._productService.getProduct(id).subscribe((data: Product) =>{
      this.form.setValue({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock
      })
    })
    
  }

  ngOnInit(): void {
    if(this.id != 0) {
      this.accion = 'Editar'
      this.getProduct(this.id)
    }
  }

}
