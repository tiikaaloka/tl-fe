import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgxHeadroomOption } from 'ngx-headroom';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  options: NgxHeadroomOption;
  constructor() {
    this.options = {
      // css classes to apply
      classes: {
        // when element is initialised
        initial: 'headroom',
        // when scrolling up
        pinned: 'headroom--pinned',
        // when scrolling down
        unpinned: 'headroom--unpinned',
        // when above offset
        top: 'headroom--top',
        // when below offset
        notTop: 'headroom--not-top',
        // when at bottom of scoll area
        bottom: 'headroom--bottom',
        // when not at bottom of scroll area
        notBottom: 'headroom--not-bottom',
        // when frozen method has been called
        frozen: 'headroom--frozen'
      }
    };
   }

  ngOnInit(): void {
// construct an instance of Headroom, passing the element

    const Sg = {
      side_menu_shown: false
    };
    $('body').on('click', (e) => {
      const target = $(e.target);

      // Toggle the side menu if click on side-menu-head
      if (
          target.parents('.side-menu').length > 0
        || target.parents('.side-menu-head').length > 0
        || target.hasClass('side-menu') === true
        ) {

        $('.side-menu-panel').toggleClass('shown');
        if ( Sg.side_menu_shown ){
          Sg.side_menu_shown = false;
        }else{
          Sg.side_menu_shown = true;
        }

      // Else if it's a click on the side menu interior, leave open
      } else if (
          target.parents('.side-menu-panel').length > 0
        || target.hasClass('side-menu-panel') === true
        ){
        // Do nothing

      // Close if click not on .side-menu-head
      } else {
        if ( Sg.side_menu_shown ){
          Sg.side_menu_shown = false;
          $('.side-menu-panel.shown').removeClass('shown');
        }
      }

      // If this is a click on the body, close the text-browser panels
      if (
          target.parents('.tool-browser').length === 0
        ){
          $('.tool-panel').addClass('hidden');
      }

      if ( target.hasClass('login') || target.parents('.login').length > 0 ){
        $('.modal-login').addClass('modal-lowered');
        e.preventDefault();
      }

    });

  }

}
