"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

import { db } from "@/app/libs/firebase";

export default function Footer() {
  const [visits, setVisits] = useState<number>(1);
  const docRef = doc(db, "stats/visits");

  useEffect(() => {
    const loadCount = async () => {
      if (!sessionStorage.getItem("visited")) {
        try {
          const snap = await getDoc(docRef);

          if (!snap.exists()) {
            await setDoc(docRef, { total: 1 });
            setVisits(1);
          } else {
            await updateDoc(docRef, { total: increment(1) });
            const { total } = (await getDoc(docRef)).data() as { total: number };
            setVisits(total);
          }

          sessionStorage.setItem("visited", "true");
          return;
        } catch (err) {
          console.error("Error incrementing visit count:", err);
          setVisits(1);
        }
      }

      try {
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          const { total } = snap.data() as { total: number };
          setVisits(total ?? 1);
        }
      } catch {
        setVisits(1);
      }
    };

    loadCount();
  }, []);

  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-4 px-6">
      <div className="text-right text-sm flex justify-end gap-1">
        Portafolio actualizado el 30 de junio del 2025&nbsp;-&nbsp;{visits}
      </div>
    </footer>
  );
}
