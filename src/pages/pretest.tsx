'use client'
import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import styles from "./../styles/pretest.module.css";
import Link from "next/link";
import Cookie from 'js-cookie';
import { useRouter } from "next/navigation";

export default function Pretest() {

  const router = useRouter()

  useEffect(() => {
    if(!Cookie.get('token')){
        router.push("/login")
    }
}, []);
  return (
    <>
      <div className={styles.ptWrapper}>
        <div className={styles.ptcontainer}>
          <span>
            <h1 className={styles.ptHeading}>Your Test Will Start Soon!</h1>
            <p className={styles.subHeading}>
              We&apos;re excited that you&apos;re about to embark on your
              assessment journey. Your test will begin shortly. Please ensure
              that you&apos;re prepared and ready for the test ahead.
            </p>
          </span> 
          <div className={styles.info}>
            <h2 className={styles.header}>Test Date and Timing:</h2>
            <ul>
              <li>
                Test Date: <strong>22 Aug, 2023</strong>
              </li>
              <li>
                Test Start Time: <strong>1:00 P.M. IST</strong>
              </li>
              <li>
                Test End Time: <strong>2:00 P.M. IST</strong>
              </li>
            </ul>
            <p className={styles.subHeading}>
              Before you begin the test, please take a moment to review these
              important instructions:
            </p>
            <h2 className={styles.header}>Instructions:</h2>
            <ul className={styles.infoList}>
              <li>
                <strong>Technical Requirements: </strong>Ensure that you have a
                stable internet connection and a compatible device (computer,
                laptop, or tablet) to take the test. Use an up-to-date web
                browser for the best experience.
              </li>
              <li>
                <strong>Quiet Environment: </strong>Find a quiet and comfortable
                place to take the test where you won&apos;t be disturbed. Close
                any unnecessary applications or tabs on your device.
              </li>
              <li>
                <strong>Materials Allowed: </strong>Follow the guidelines
                provided by your test administrator regarding any materials or
                resources that are allowed during the test. Make sure to have
                any required materials ready.
              </li>
              <li>
                <strong>Submission: </strong>Once you start the test, complete
                it in one sitting. Do not close the browser or navigate away
                from the test page until you have finished and submitted your
                responses.
              </li>
            </ul>
           
          </div>
          <Link href="/question">
              <button className="btn pt-4 pb-4 pl-14 pr-14  font-inter rounded-full border-solid border-white-500 bg-blue-500  text-sm register ml-5 border-0 font-semibold text-white">
                Take test
              </button>
            </Link>
        </div>
      </div>
    </>
  );
}