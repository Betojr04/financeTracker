import React, {useState, useEffect} from 'react';

const TrackingForm = () => {
  return (
    <>
        <form >
        <fieldset>
          <legend>Finances</legend>

          {/* type of transaction input */}
          <div>
            <label htmlFor="type">Select Type: </label>
            <select id="type" name="type" required>
              <option value="" disabled >
                Select an Option
              </option>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          {/* transaction information input */}

          <div>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="transaction-date" required/>
            <label htmlFor="amount">Amount:</label>
            <span>$</span>{" "}
            <input name="transaction-amount" id="amount" placeholder="0.00" required/>
          </div>

          {/* reason for transaction */}
          <label htmlFor='reason'>Reason:</label>
          <textarea name="transaction-reason" id='reason'  placeholder='To buy food etc....' required></textarea>
        </fieldset>
      </form>
    </>
  );
};

export default TrackingForm
