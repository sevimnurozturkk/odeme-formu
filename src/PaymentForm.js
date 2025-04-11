// PaymentForm.js
import React, { useState } from 'react';

const PaymentForm = () => {
  const currentYear = new Date().getFullYear();
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Kart Üzerindeki İsim: ${cardName}\nKart Numarası: ${cardNumber}\nAy: ${month}\nYıl: ${year}\nGüvenlik Kodu: ${cvv}`);
  };

  const renderMonthOptions = () => {
    return Array.from({ length: 12 }, (_, i) => {
      const value = (i + 1).toString().padStart(2, '0');
      return <option key={value} value={value}>{value}</option>;
    });
  };

  const renderYearOptions = () => {
    return Array.from({ length: 10 }, (_, i) => {
      const value = currentYear + i;
      return <option key={value} value={value}>{value}</option>;
    });
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Ödeme Bilgileri</h2>
        <p style={styles.subtitle}>Kredi kartı bilgilerinizi giriniz</p>

        <label style={styles.label}>Kart Üzerindeki İsim</label>
        <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} style={styles.input} placeholder="Sevim Nur Öztürk" />

        <label style={styles.label}>Kart Numarası</label>
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} style={styles.input} placeholder="0000 0000 0000 0000" />

        <div style={styles.row}>
          <div style={styles.selectContainer}>
            <label style={styles.label}>Ay</label>
            <select value={month} onChange={(e) => setMonth(e.target.value)} style={styles.select}>
              <option value="">AA</option>
              {renderMonthOptions()}
            </select>
          </div>

          <div style={styles.selectContainer}>
            <label style={styles.label}>Yıl</label>
            <select value={year} onChange={(e) => setYear(e.target.value)} style={styles.select}>
              <option value="">YY</option>
              {renderYearOptions()}
            </select>
          </div>

          <div style={styles.cvvContainer}>
            <label style={styles.label}>Güvenlik Kodu</label>
            <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} style={styles.input} placeholder="123" />
          </div>
        </div>

        <button type="submit" style={styles.button}>Şimdi Öde</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
  },
  form: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  title: {
    margin: '0 0 10px',
  },
  subtitle: {
    margin: '0 0 20px',
    color: '#555',
  },
  label: {
    fontSize: '14px',
    marginBottom: '5px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
  selectContainer: {
    flex: 1,
  },
  select: {
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    marginBottom: '15px',
  },
  cvvContainer: {
    flex: 1,
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default PaymentForm;
