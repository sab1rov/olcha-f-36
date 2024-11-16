import React, { useState } from "react";
import Xicon from "../../assets/icons/Xicon";


function Login() {
  const [phone, setPhone] = useState("");
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [countryCode, setCountryCode] = useState("+998");
  

  const phoneFormats = {
    "+998": { pattern: "[0-9]{3}[0-9]{3}[0-9]{4}", length: 9 },
    "+355": { pattern: "[0-9]{3}[0-9]{3}[0-9]{4}", length: 9 },
    "+855": { pattern: "[0-9]{3}[0-9]{3}[0-9]{4}", length: 9 },
  };
  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value;
    setPhone(phoneValue);

   if (phoneValue.length === phoneFormats[countryCode].length) {
       setShowPasswordField(true);
    } else {
       setShowPasswordField(false);
    }
  };

  const handleCountryChange = (e) => {
    setCountryCode(e.target.value);
    setPhone("");
    setShowPasswordField(false); 
  };

  return (
    <section className="login-page">
      <div className="container">
        <div className="login-page__wraps">
          <div className="login-page__wrap">
            <div className="login-page__row">
              <h2 className="login-page__title">Tizimga kirish yoki profil yaratish</h2>
              <div className="login-page__icon">
                <Xicon />
              </div>
            </div>

            <form className="login-page__form">
              <p className="login-page__subtitle">Telefon raqami</p>
              <div className="phone-input-wrapper">
                <select name="countryCode" className="login-page__select" value={countryCode} onChange={handleCountryChange}>
                  <option value="+998">+998</option>
                  <option value="+355">+355</option>
                  <option value="+855">+855</option>
                  </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(_ _ _) _ _ _ _"
                  pattern={phoneFormats[countryCode].pattern}
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                />
              </div>
            </form>
            
            {showPasswordField && (
              <form className="login-page__password">
                <p className="login-page__subtitle">SMS kodni kiriting</p>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="SMS kodni kiriting"
                  required
                />
              </form>
            )}

            <button onClick={() => setShowPasswordField(false)} className="login-page__button">Tasdiqlash</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
