// THIS IS THE ROOT COMPONENT OF THE APP
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

// IMPORT FONTAWESOME ICONS
import { faHome, faPlusCircle, faCartShopping, faArrowCircleUp, faLock, faClose, faBagShopping, faEllipsis, IconDefinition } from '@fortawesome/free-solid-svg-icons';

// IMPORT ANGULAR FORMS
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// SERVICES
import { SharedService } from '../services/forms/shared.service';
import { ProductService } from 'src/services/products/products.service';
import { UserService } from 'src/services/users/users.service';

// MODELS
import { PRODUCT_MODEL } from 'src/abstract_classes/product.model';

// THE @Component DECORATOR INDICATES THAT THIS
// FILE IS A COMPONENT
@Component({
  selector: 'app-root', // CUSTOM HTML SELECTOR
  templateUrl: './app.component.html', // LINK TO HTML
  styleUrls: ['./app.component.css'] // LINK TO CSS
})
export class AppComponent implements AfterViewInit {
  // SELECT ADD PRODUCT FORM : Note @ViewChild can only select one Element
  @ViewChild('addProductForm', { static: false })
  elementRef!: ElementRef;

  // INITIALIZE PRODUCT FORM
  productForm!: FormGroup;

  // LOGIN STATUS
  isSignedIn: boolean = false;

  // LOGO IMAGE URLs
  logoImageURL = './assets/images/png/logo_color.png';
  logoImageURLalt = './assets/images/png/logo_color_cart.png';

  // FONT AWESOME ICONS
  homeIcon: IconDefinition = faHome;
  plusIcon: IconDefinition = faPlusCircle;
  cartIcon: IconDefinition = faCartShopping;
  bagIcon: IconDefinition = faBagShopping;
  upIcon: IconDefinition = faArrowCircleUp;
  lockIcon: IconDefinition = faLock;
  closeIcon: IconDefinition = faClose;
  ellipsisIcon: IconDefinition = faEllipsis;

  // DEFAULT FORM INPUT VALUES
  defaultParams = {
    productName: 'Enter product name...',
    productImage: 'Enter image URL...',
    productPrice: 1000,
    productCategory: 'Enter category...',
    productDescription: 'Enter description...',
  };

  // INJECT SERVICES & FORM CLASSES
  constructor(private sharedService: SharedService, private productService: ProductService, private userService: UserService, private formBuilder: FormBuilder) { }

  //////////////////////////////////////////
  //    METHODS TO UPDATE ACTIVE STATE    //
  //////////////////////////////////////////
  setCategoriesActive(): void {
    this.sharedService.openCategoriesForm();
  }

  setSignUpActive(): void {
    this.sharedService.openSignUpForm();
  }

  // METHOD TO HANDLE FORM POP UPS
  setSignInActive(): void {
    // IF isSignedIn IS EQUAL TO true
    // EXECUTE Sign Out LOGIC
    if (this.isSignedIn) {
      // CLEAR LOCAL STORAGE
      localStorage.clear();
      // SET isSignedIn STATE TO false WHEN Sign Out BUTTON IS CLICKED
      this.isSignedIn = false;
      // ELSE OPEN SignIn FORM
    } else {
      this.sharedService.openSignInForm();
    }
  }


  ngOnInit() {
    // CHECK THE STATE OF LOCAL STORAGE
    this.isSignedIn = (localStorage.getItem('token') !== null);
    // CREATE REACTIVE FORM
    this.productForm = this.formBuilder.group({
      productName: ["", Validators.required],
      productImage: ["", Validators.required],
      productDescription: ["", Validators.required],
      category: ["", Validators.required],
      price: ["", Validators.required],
    });
  }

  ngAfterViewInit() { }

  ///////////////////////////////////////////
  /// METHOD TO REDIRECT USER TO HOMEPAGE ///
  ///////////////////////////////////////////
  redirectToHomePage() {

  }

  /////////////////////////////////////////
  //// METHOD FOR TOGGLING POP UP MENU ////
  /////////////////////////////////////////
  togglePopUp() {
    // SELECT ADD PRODUCT FORM
    const addProductForm = this.elementRef.nativeElement;
    addProductForm.classList.add('active');
  }

  // METHOD FOR CLOSING ADD PRODUCT FORM | POP UP
  closeForm() {
    const addProductForm = this.elementRef.nativeElement;
    addProductForm.classList.remove('active');
  }

  // METHOD FOR CHECKING IF USER IS AUTHENTICATED
  Authenticated() {
    return this.userService.isAuthenticated();
  }

  ///////////////////////////////
  // METHOD FOR ADDING PRODUCT //
  ///////////////////////////////
  addProduct() {
    if (this.productForm.valid) {
      const newProduct: PRODUCT_MODEL = this.productForm.value;
      // GET TOKEN FROM LOCAL STORAGE
      const token = localStorage.getItem('token') as string;

      this.productService.createProduct(newProduct, token).subscribe((response: any) => {
        console.log(response);
      },
        (error: any) => {
          console.error(error);
        });
    }
  }
}
