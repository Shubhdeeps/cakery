import { useState } from "react";
import { Cake } from "../models/Cake";
import axios from "axios";

export function useFetchCake(id: string) {
  const [cake, setCake] = useState<Cake>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetch() {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:8080/cake/${id}`);
      const data = res.data as Cake;
      setCake(data);
      setLoading(false);
    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  }

  return {
    cake,
    loading,
    error,
    fetch,
  };
}

export function useFetchAllCake() {
  const [cake, setCake] = useState<Cake[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetch() {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:8080/cake/all`);
      const data = res.data as Cake[];

      setCake(data);
      setLoading(false);
    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  }

  return {
    cake,
    loading,
    error,
    fetch,
  };
}

export function useFetchSpecialCake() {
  const [cake, setCake] = useState<Cake[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetch() {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8080/cake/category/special"
      );
      const data = res.data as Cake[];

      setCake(data);
      setLoading(false);
    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  }

  return {
    cake,
    loading,
    error,
    fetch,
  };
}
