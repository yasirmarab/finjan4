// simplified entry point
import React from "react";
import { createRoot } from "react-dom/client";
import BookingApp from "./BookingApp";
import "./style.css";

createRoot(document.getElementById("root")).render(<BookingApp />);
