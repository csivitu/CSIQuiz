'use client'

import React from "react";
import "tailwindcss/tailwind.css";
import styles from "../styles/landing.module.css";
import {useState, useEffect} from 'react';
import getHandler from "@/handlers/getHandler";


export default function ResultsNew() {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const getStuff = async () => {
      const response = await getHandler(`${process.env.NEXT_PUBLIC_BACKEND_URL}/leaderboard/data`, true);
      setScore(response.data.data.score);
      setTotal(response.data.data.total);
      setPercentage(response.data.data.percentage)
    }
    getStuff();
  },[])

  return (
    <>
      <div className={[styles.resultWrapper].join(" ")}>
        <div className={styles.resultContainer}>
          <span className={styles.rHeading}>
            Thank you for taking the Quiz!
          </span>
          <div className={styles.rFlexCont}>
            <div className={styles.circlesContainer}>
              <div className={styles.circles}>
                <span className={[styles.circleA, styles.circle].join(" ")}>
                  {percentage}%
                </span>
                <span className={[styles.circleB, styles.circle].join(" ")}>
                  {total}
                </span>
              </div>
            </div>
            <div className={styles.rInfo}>
              <span className={styles.infoTitle}>Your Score is {score}/10</span>
              <span className={styles.infoTitle}>
                You scored better than {percentage}% participants who attempted the quiz
              </span>
            </div>
          </div>
          <span className={styles.rfoot}>
            <span className="text-red-700">
              <strong>{total}</strong>
            </span>{" "}
            people have attempted the quiz so far
          </span>
        </div>
      </div>
    </>
  );
}