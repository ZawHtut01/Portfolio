import { AfterViewInit, Component } from '@angular/core';
import { DoctorService } from './services/doctor.service';
import { Doctor } from './models/doctor';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Typed from 'typed.js';


// import Typed from 'typed.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const typed = new Typed(".text", {
      strings: ["Software Developer.", "Full Stack Developer.", ".NET Developer."],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    const toTop = document.querySelector(".top") as HTMLElement | null;

    window.addEventListener("scroll", (): void => {
      if (toTop) {
        if (window.pageYOffset > 100) {
          toTop.classList.add("active");
        } else {
          toTop.classList.remove("active");
        }
      }
    });
  }

  downloadResume(): void {
    const fileUrl = 'assets/files/Zaw Htut Aung.pdf'; // Recommended: store in assets folder
    window.open(fileUrl, '_blank');
  }
}

