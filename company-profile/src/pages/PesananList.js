import React, { useEffect, useState } from 'react';

function PesananList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/list.php")
      .then(res => {
        console.log("Status response:", res.status);
        return res.json();
      })
      .then(data => {
        console.log("Data dari backend:", data);
        setData(data);
      })
      .catch(err => console.error("Gagal mengambil data:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Data Pesanan Konveksi</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Jenis</th>
            <th>Jumlah</th>
            <th>Ukuran</th>
            <th>Warna</th>
            <th>Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">Belum ada data.</td>
            </tr>
          ) : (
            data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.nama_pelanggan}</td>
                <td>{row.jenis_pakaian}</td>
                <td>{row.jumlah}</td>
                <td>{row.ukuran}</td>
                <td>{row.warna}</td>
                <td>{row.tanggal_pesan}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PesananList;
