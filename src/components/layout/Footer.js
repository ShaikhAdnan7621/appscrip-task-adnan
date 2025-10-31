import { SVGAmericanExpressIcon, SVGApplePayIcon, SVGGPayIcon, SVGMastercardIcon, SVGPaypalIcon, SVGShopPayIcon } from '@/assets/paymentprovidericons'
import './FooterStyle.css'
import Link from 'next/link'
import React from 'react'
import { SVGInstagramIcon, SVGLinkedinIcon, SVGUSAFlagIcon } from '@/assets/icons'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='upperrow'>
        <div className='upperleft'>
          <h2 className='uppercase '>Be the first to know</h2>
          <p >Sign up for updates from mettā muse.</p>
          <div className='connectboxrow'>
            <input placeholder='Enter your e-mail...' />
            <button className='uppercase'>Subscribe</button>
          </div>
        </div>
        <hr className='hrsarator' />

        <div className='upperright'>

          <h2 className='contacteading'>CONTACT US</h2>
          <div className='contactdetailscontainer'>
            <h4 className=''>+44 221 133 5360</h4>
            <span className='saprator'>&#9670;</span>
            <h4 className='mailtext'>customercare@mettamuse.com</h4>
          </div>
          <hr className='hrsarator' />

          <h2 className='uppercase'>Currency</h2>
          <div className='row currencyrow'>
            <SVGUSAFlagIcon />
            <h4>&#9670; USD</h4>
          </div>
          <p className='paymentnote'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>

      </div>

      <hr className='hrboldsarator' />
      <div className='lowerrow'>
        <div className='cloumn1'>
          <details className='colapsable1' open>
            <summary>
              <h2 className=''>mettā muse</h2>
            </summary>
            <div className='linklist'>
              <Link className='footerlinks' href="/about"><h4>About Us</h4></Link>
              <Link className='footerlinks' href="/stories"><h4>Stories</h4></Link>
              <Link className='footerlinks' href="/artisans"><h4>Artisans</h4></Link>
              <Link className='footerlinks' href="/boutiques"><h4>Boutiques</h4></Link>
            </div>
          </details>
        </div>

        <hr className='hrsarator' />
        <div className='cloumn2'>
          <details className='colapsable2' open>
            <summary>
              <h2 className='uppercase'>Quick Links</h2>
            </summary>
            <div className='linklist'>
              <Link className='footerlinks' href="/orders-shipping"><h4>Orders & Shipping</h4></Link>
              <Link className='footerlinks' href="/seller-login"><h4>Join/Login as a Seller</h4></Link>
              <Link className='footerlinks' href="/payment-pricing"><h4>Payment & Pricing</h4></Link>
              <Link className='footerlinks' href="/returns-refunds"><h4>Return & Refunds</h4></Link>
              <Link className='footerlinks' href="/faqs"><h4>FAQs</h4></Link>
              <Link className='footerlinks' href="/privacy-policy"><h4>Privacy Policy</h4></Link>
              <Link className='footerlinks' href="/terms-conditions"><h4>Terms & Conditions</h4></Link>
            </div>
          </details>
        </div>

        <hr className='hrsarator' />

        <div className='cloumn3'>

          <details className='colapsable3' open>
            <summary>
              <h2 className='uppercase'>Follow Us</h2>
            </summary>
            <div className='iconlist'>
              <span className='socialiconrapper'>
                <SVGInstagramIcon className='socialicon' />
              </span>
              <span className='socialiconrapper'>
                <SVGLinkedinIcon className='socialicon' />
              </span>
            </div>
          </details>

          <h2 className='acceptheading'>mettā muse Accepts</h2>
          <div className='row paymentmethodlist'>
            <SVGGPayIcon />
            <SVGMastercardIcon />
            <SVGPaypalIcon />
            <SVGAmericanExpressIcon />
            <SVGApplePayIcon />
            <SVGShopPayIcon />
          </div>
        </div>
      </div>
      <p className='copyrightMark'>Copyright © 2023 mettamuse. All rights reserved.</p>
    </div>
  )
}
