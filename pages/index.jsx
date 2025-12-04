import React from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  const highlights = [
    {
      title: "Small batch roasting",
      text: "Seasonal beans roasted on site in small batches for balanced espresso and filter.",
    },
    {
      title: "Fresh bakes every morning",
      text: "Croissants, buns and cakes from local bakers, delivered before doors open.",
    },
    {
      title: "Space to work and unwind",
      text: "Free wifi, power at most tables and quiet corners for reading or studying.",
    },
  ];

  const stats = [
    { label: "Origins on rotation", value: "6" },
    { label: "Seats in store", value: "80+" },
    { label: "Events per month", value: "4" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-50 to-amber-100">
      <NavBar />

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop"
            alt="Coffee bar with espresso machine"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-
