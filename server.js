const express = require('express');
const app = express();

// Use the built-in express.json() middleware to parse incoming JSON payloads
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set up a POST route at the /confirmation path
app.get('/validate', (req, res) => {
  // Respond with a static JSON template
  res.json({order_validation_response: {
      approval: "go",
      version: "3.0",
      parameters: {
        site_order_identifier: "0001469524526",
        site_customer_identifier: "00014695",
        ext_chargeoff_flag: "false",
        ext_chapter_7_flag: "false",
        ext_discharge_flag: "false",
        ext_reaffirmation_flag: "false",
        ext_chapter_11_flag: "false",
        ext_chapter_13_flag: "false",
        ext_bankruptcy_plan_flag: "false",
        ext_litigation_flag: "false",
        ext_foreclosure_flag: "false",
        ext_pending_repo_flag: "false",
        ext_repo_security_flag: "false",
        ext_fraud_flag: "false",
        ext_nsf_amount: "0",
        ext_account_type: "ib",
        ext_account_balance: "8,648.50",
        ext_next_payment_due_date: "",
        ext_gap_premium_amount: "0",
        ext_gap_refunded: "True",
        ext_total_late_charges: "0"
      }
    
  }});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
