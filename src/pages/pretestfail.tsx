import React from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import styles from "./../styles/pretest.module.css";
import Link from "next/link";

export default function Pretestfail() {
  return (
    <div className={styles.ptWrapper}>
      <span className={styles.ptcontainer}>
        <span>
          <h1 className={styles.ptHeading}>Please Login To Take Test!</h1>
          <p className={styles.subHeading}>
            We&apos;re excited that you&apos;re about to embark on your
            assessment journey. You will be able to take the test after Logging
            In. Please ensure that you&apos;re prepared and ready for the test
            ahead.
          </p>
          <div className={styles.buttonPanel}>
            <Link href="/signup">
              {" "}
              <button className="btn pt-4 pb-4 pl-14 pr-14 border font-inter rounded-full border-solid border-white-500 bg-csigold text-black text-sm register font-semibold">
                Register
              </button>
            </Link>
            <Link href="/login">
              <button className="btn pt-4 pb-4 pl-14 pr-14  font-inter rounded-full border-solid border-white-500 bg-blue-500  text-sm register ml-5 border-0 font-semibold text-white">
                Login
              </button>
            </Link>
          </div>
        </span>
      </span>
    </div>
  );
}