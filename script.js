// Simple in-memory data store based on your SQL sample data.
// In a real project, replace these with fetch() calls to your backend APIs.

const db = {
  users: [
    {
      aadhar_no: 'AAD001',
      name: 'Rohan Mehta',
      dob: '1995-03-15',
      gender: 'Male',
      contact_no: '9876543210',
      address: 'Mumbai',
      occupation: 'Software Engineer',
      annualincome: 1200000,
    },
    {
      aadhar_no: 'AAD002',
      name: 'Priya Sharma',
      dob: '1990-08-21',
      gender: 'Female',
      contact_no: '9823456789',
      address: 'Pune',
      occupation: 'Teacher',
      annualincome: 600000,
    },
    {
      aadhar_no: 'AAD003',
      name: 'Amit Patel',
      dob: '1987-11-05',
      gender: 'Male',
      contact_no: '9998765432',
      address: 'Delhi',
      occupation: 'Doctor',
      annualincome: 1500000,
    },
  ],
  bankAccounts: [
    {
      account_no: 'ACC001',
      aadhar_no: 'AAD001',
      bank_name: 'HDFC Bank',
      branch_name: 'Andheri',
      ifsc_code: 'HDFC0001234',
      bank_acc_type: 'Savings',
      balance: 85000,
    },
    {
      account_no: 'ACC002',
      aadhar_no: 'AAD002',
      bank_name: 'ICICI Bank',
      branch_name: 'Shivaji Nagar',
      ifsc_code: 'ICIC0009876',
      bank_acc_type: 'Current',
      balance: 120000,
    },
    {
      account_no: 'ACC003',
      aadhar_no: 'AAD003',
      bank_name: 'SBI Bank',
      branch_name: 'Connaught Place',
      ifsc_code: 'SBIN0003456',
      bank_acc_type: 'Savings',
      balance: 200000,
    },
  ],
  fds: [
    {
      fd_id: 'FD001',
      account_no: 'ACC001',
      deposit_amount: 50000,
      interest: 7.5,
      s_date: '2024-01-10',
      maturitydate: '2025-01-10',
      maturity_amount: 53750,
      status: 'Active',
    },
    {
      fd_id: 'FD002',
      account_no: 'ACC002',
      deposit_amount: 80000,
      interest: 7.2,
      s_date: '2023-12-01',
      maturitydate: '2024-12-01',
      maturity_amount: 85760,
      status: 'Closed',
    },
  ],
  loans: [
    {
      loan_id: 'LN001',
      account_no: 'ACC003',
      loantype: 'Home Loan',
      principalamt: 1000000,
      interest: 8.0,
      s_date: '2022-06-01',
      e_date: '2032-06-01',
      emi_amt: 12164,
      outstandingamt: 750000,
      status: 'Active',
    },
    {
      loan_id: 'LN002',
      account_no: 'ACC001',
      loantype: 'Car Loan',
      principalamt: 600000,
      interest: 7.5,
      s_date: '2023-02-15',
      e_date: '2028-02-15',
      emi_amt: 12000,
      outstandingamt: 480000,
      status: 'Active',
    },
  ],
  nominees: [
    { account_no: 'ACC001', nominee_name: 'Sneha Mehta', nominee_percentage: 100 },
    { account_no: 'ACC002', nominee_name: 'Arjun Sharma', nominee_percentage: 100 },
  ],
  properties: [
    {
      propertyid: 'PRP001',
      aadharno: 'AAD001',
      propertyname: 'Sunshine Apartment',
      propertytype: 'Flat',
      estimatedvalue: 8500000,
      address: 'Andheri East, Mumbai',
      area: 1200,
    },
    {
      propertyid: 'PRP002',
      aadharno: 'AAD002',
      propertyname: 'GreenVille Villa',
      propertytype: 'Villa',
      estimatedvalue: 12500000,
      address: 'Pune City',
      area: 2500,
    },
  ],
  vehicles: [
    {
      vehicleid: 'VH001',
      aadharno: 'AAD001',
      make: 'Hyundai',
      model: 'i20',
      year: 2022,
      vehicletype: 'Hatchback',
      color: 'White',
      platenumber: 'MH12AB1234',
    },
    {
      vehicleid: 'VH002',
      aadharno: 'AAD003',
      make: 'Honda',
      model: 'City',
      year: 2021,
      vehicletype: 'Sedan',
      color: 'Black',
      platenumber: 'DL8CAB9876',
    },
  ],
  preciousMetals: [
    { metalid: 'PM001', aadhar_no: 'AAD002', metal_name: 'Gold', density: 19.32, purity: 99.9 },
    { metalid: 'PM002', aadhar_no: 'AAD003', metal_name: 'Silver', density: 10.49, purity: 95.5 },
  ],
  dependents: [
    {
      dependent_id: 'DEP001',
      aadhar_no: 'AAD001',
      dependent_name: 'Sneha Mehta',
      relation: 'Wife',
      gender: 'Female',
      dob: '1996-09-21',
    },
    {
      dependent_id: 'DEP002',
      aadhar_no: 'AAD002',
      dependent_name: 'Ravi Sharma',
      relation: 'Son',
      gender: 'Male',
      dob: '2015-06-12',
    },
  ],
  shares: [
    {
      isin: 'SHR001',
      aadhar_no: 'AAD001',
      company_name: 'TCS Ltd',
      quantity: 50,
      purchaseprice: 3200,
      purchasedate: '2023-01-10',
      currentprice: 3650,
      totalvalue: 182500,
    },
    {
      isin: 'SHR002',
      aadhar_no: 'AAD003',
      company_name: 'Reliance Industries',
      quantity: 30,
      purchaseprice: 2500,
      purchasedate: '2022-11-15',
      currentprice: 2900,
      totalvalue: 87000,
    },
  ],
  mutualFunds: [
    {
      mf_id: 'MF001',
      aadhar_no: 'AAD001',
      fund_name: 'HDFC Equity Fund',
      scheme_type: 'Equity',
      units: 100,
      nav_at_purchase: 450,
      current_nav: 520,
      purchase_date: '2023-05-01',
    },
    {
      mf_id: 'MF002',
      aadhar_no: 'AAD002',
      fund_name: 'ICICI Balanced Advantage',
      scheme_type: 'Hybrid',
      units: 200,
      nav_at_purchase: 40,
      current_nav: 52,
      purchase_date: '2022-08-15',
    },
  ],
  insurance: [
    {
      insurance_id: 'INS001',
      aadhar_no: 'AAD001',
      policy_no: 'POL001',
      insurancetype: 'Life Insurance',
      companyname: 'LIC',
      s_date: '2021-05-01',
      e_date: '2041-05-01',
      coverageamt: 1000000,
      status: 'Active',
    },
    {
      insurance_id: 'INS002',
      aadhar_no: 'AAD002',
      policy_no: 'POL002',
      insurancetype: 'Health Insurance',
      companyname: 'Star Health',
      s_date: '2022-01-01',
      e_date: '2027-01-01',
      coverageamt: 500000,
      status: 'Active',
    },
  ],
  moneyBorrowed: [
    {
      borrowid: 'MB001',
      aadhar_no: 'AAD001',
      lendername: 'ICICI Bank',
      amtborrowed: 200000,
      borrowdate: '2023-03-01',
      interest: 8.5,
      duedate: '2024-03-01',
      outstandingamt: 100000,
      status: 'Active',
    },
    {
      borrowid: 'MB002',
      aadhar_no: 'AAD003',
      lendername: 'SBI Bank',
      amtborrowed: 500000,
      borrowdate: '2022-09-01',
      interest: 9.0,
      duedate: '2024-09-01',
      outstandingamt: 250000,
      status: 'Active',
    },
  ],
  moneyLended: [
    {
      lendid: 'ML001',
      aadhar_no: 'AAD002',
      borrowername: 'Amit Patel',
      amtlended: 100000,
      lenddate: '2023-04-15',
      interest: 10.0,
      duedate: '2024-04-15',
      outstandingamt: 50000,
      status: 'Active',
    },
    {
      lendid: 'ML002',
      aadhar_no: 'AAD001',
      borrowername: 'Priya Sharma',
      amtlended: 75000,
      lenddate: '2023-05-20',
      interest: 9.5,
      duedate: '2024-05-20',
      outstandingamt: 25000,
      status: 'Active',
    },
  ],
};

// ----- PAGE NAVIGATION -----

function initNavigation() {
  const buttons = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const pageName = btn.dataset.page;
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      pages.forEach((p) => p.classList.remove('active'));
      const activePage = document.getElementById(`page-${pageName}`);
      if (activePage) activePage.classList.add('active');
    });
  });
}

// ----- HELPERS -----

function formatCurrency(n) {
  if (n === undefined || n === null || isNaN(n)) return '-';
  return '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: 2 });
}

function formatDate(d) {
  if (!d) return '';
  return String(d).split('T')[0];
}

// ----- DASHBOARD -----

function initDashboard() {
  const container = document.getElementById('dashboard-cards');
  if (!container) return;

  const totalUsers = db.users.length;
  const totalBalance = db.bankAccounts.reduce((s, a) => s + Number(a.balance || 0), 0);
  const totalLoanOutstanding = db.loans.reduce(
    (s, l) => s + Number(l.outstandingamt || 0),
    0,
  );
  const totalFD = db.fds.reduce((s, f) => s + Number(f.deposit_amount || 0), 0);

  const cards = [
    {
      title: 'Total Users',
      value: totalUsers,
      sub: 'Registered customers',
    },
    {
      title: 'Total Bank Balance',
      value: formatCurrency(totalBalance),
      sub: 'Across all bank accounts',
    },
    {
      title: 'Total Loan Outstanding',
      value: formatCurrency(totalLoanOutstanding),
      sub: 'Outstanding principal',
    },
    {
      title: 'Total FD Amount',
      value: formatCurrency(totalFD),
      sub: 'Principal invested in FDs',
    },
  ];

  container.innerHTML = cards
    .map(
      (c) => `
      <article class="card">
        <div class="card-title">${c.title}</div>
        <div class="card-value">${c.value}</div>
        <div class="card-sub">${c.sub}</div>
      </article>`,
    )
    .join('');
}

// ----- USERS -----

function renderUsersTable() {
  const tbody = document.querySelector('#table-users tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  db.users.forEach((u) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${u.aadhar_no}</td>
      <td>${u.name}</td>
      <td>${u.dob}</td>
      <td>${u.gender || ''}</td>
      <td>${u.contact_no || ''}</td>
      <td>${u.address || ''}</td>
      <td>${u.occupation || ''}</td>
      <td>${formatCurrency(u.annualincome)}</td>
      <td>
        <button class="action-btn" data-action="edit" data-aadhar="${u.aadhar_no}">Edit</button>
        <button class="action-btn danger" data-action="delete" data-aadhar="${u.aadhar_no}">Delete</button>
      </td>`;
    tbody.appendChild(tr);
  });
}

function fillUserForm(user) {
  document.getElementById('user-aadhar').value = user?.aadhar_no || '';
  document.getElementById('user-name').value = user?.name || '';
  document.getElementById('user-dob').value = user?.dob || '';
  document.getElementById('user-gender').value = user?.gender || '';
  document.getElementById('user-contact').value = user?.contact_no || '';
  document.getElementById('user-address').value = user?.address || '';
  document.getElementById('user-occupation').value = user?.occupation || '';
  document.getElementById('user-annual-income').value = user?.annualincome || '';
}

function initUsersPage() {
  renderUsersTable();

  const tbody = document.querySelector('#table-users tbody');
  tbody.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const action = target.dataset.action;
    const aadhar = target.dataset.aadhar;
    if (!action || !aadhar) return;

    const index = db.users.findIndex((u) => u.aadhar_no === aadhar);
    if (index === -1) return;

    if (action === 'edit') {
      fillUserForm(db.users[index]);
    } else if (action === 'delete') {
      if (confirm('Delete this user?')) {
        db.users.splice(index, 1);
        renderUsersTable();
        populateUserSelects();
        initDashboard();
      }
    }
  });

  document.getElementById('btn-add-user').addEventListener('click', () => {
    fillUserForm(null);
  });

  document.getElementById('user-reset').addEventListener('click', () => {
    fillUserForm(null);
  });

  const form = document.getElementById('form-user');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = {
      aadhar_no: document.getElementById('user-aadhar').value.trim(),
      name: document.getElementById('user-name').value.trim(),
      dob: document.getElementById('user-dob').value || null,
      gender: document.getElementById('user-gender').value || null,
      contact_no: document.getElementById('user-contact').value || null,
      address: document.getElementById('user-address').value || null,
      occupation: document.getElementById('user-occupation').value || null,
      annualincome: Number(document.getElementById('user-annual-income').value || 0),
    };

    if (!user.aadhar_no || !user.name) {
      alert('Aadhar and Name are required');
      return;
    }

    const idx = db.users.findIndex((u) => u.aadhar_no === user.aadhar_no);
    if (idx === -1) {
      db.users.push(user);
    } else {
      db.users[idx] = user;
    }

    renderUsersTable();
    populateUserSelects();
    initDashboard();
    alert('User saved in in-memory store. Connect to backend to persist.');
  });
}

// ----- BANK ACCOUNTS -----

function populateUserSelects() {
  const userSelects = [document.getElementById('acc-aadhar')];
  userSelects.forEach((sel) => {
    if (!sel) return;
    sel.innerHTML = '<option value="">Select User</option>';
    db.users.forEach((u) => {
      const opt = document.createElement('option');
      opt.value = u.aadhar_no;
      opt.textContent = `${u.aadhar_no} - ${u.name}`;
      sel.appendChild(opt);
    });
  });
}

function populateAccountSelects() {
  const fdAcc = document.getElementById('fd-account');
  const loanAcc = document.getElementById('loan-account');
  const selects = [fdAcc, loanAcc];
  selects.forEach((sel) => {
    if (!sel) return;
    sel.innerHTML = '<option value="">Select Account</option>';
    db.bankAccounts.forEach((a) => {
      const opt = document.createElement('option');
      opt.value = a.account_no;
      opt.textContent = `${a.account_no} - ${a.bank_name}`;
      sel.appendChild(opt);
    });
  });
}

function renderAccountsTable() {
  const tbody = document.querySelector('#table-accounts tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  db.bankAccounts.forEach((a) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${a.account_no}</td>
      <td>${a.aadhar_no}</td>
      <td>${a.bank_name}</td>
      <td>${a.branch_name}</td>
      <td>${a.ifsc_code}</td>
      <td>${a.bank_acc_type}</td>
      <td>${formatCurrency(a.balance)}</td>
      <td>
        <button class="action-btn" data-action="edit" data-account="${a.account_no}">Edit</button>
        <button class="action-btn danger" data-action="delete" data-account="${a.account_no}">Delete</button>
      </td>`;
    tbody.appendChild(tr);
  });
}

function fillAccountForm(acc) {
  document.getElementById('acc-no').value = acc?.account_no || '';
  document.getElementById('acc-aadhar').value = acc?.aadhar_no || '';
  document.getElementById('acc-bank-name').value = acc?.bank_name || '';
  document.getElementById('acc-branch-name').value = acc?.branch_name || '';
  document.getElementById('acc-ifsc').value = acc?.ifsc_code || '';
  document.getElementById('acc-type').value = acc?.bank_acc_type || '';
  document.getElementById('acc-balance').value = acc?.balance || '';
}

function initAccountsPage() {
  populateUserSelects();
  renderAccountsTable();
  populateAccountSelects();

  const tbody = document.querySelector('#table-accounts tbody');
  tbody.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const action = target.dataset.action;
    const account = target.dataset.account;
    if (!action || !account) return;

    const idx = db.bankAccounts.findIndex((a) => a.account_no === account);
    if (idx === -1) return;

    if (action === 'edit') {
      fillAccountForm(db.bankAccounts[idx]);
    } else if (action === 'delete') {
      if (confirm('Delete this account?')) {
        db.bankAccounts.splice(idx, 1);
        renderAccountsTable();
        populateAccountSelects();
        initDashboard();
      }
    }
  });

  document.getElementById('btn-add-account').addEventListener('click', () => {
    fillAccountForm(null);
  });
  document.getElementById('account-reset').addEventListener('click', () => {
    fillAccountForm(null);
  });

  const form = document.getElementById('form-account');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const acc = {
      account_no: document.getElementById('acc-no').value.trim(),
      aadhar_no: document.getElementById('acc-aadhar').value,
      bank_name: document.getElementById('acc-bank-name').value,
      branch_name: document.getElementById('acc-branch-name').value,
      ifsc_code: document.getElementById('acc-ifsc').value,
      bank_acc_type: document.getElementById('acc-type').value,
      balance: Number(document.getElementById('acc-balance').value || 0),
    };

    if (!acc.account_no || !acc.aadhar_no) {
      alert('Account No and User are required');
      return;
    }

    const idx = db.bankAccounts.findIndex((a) => a.account_no === acc.account_no);
    if (idx === -1) db.bankAccounts.push(acc);
    else db.bankAccounts[idx] = acc;

    renderAccountsTable();
    populateAccountSelects();
    initDashboard();
    alert('Account saved in in-memory store. Connect to backend to persist.');
  });
}

// ----- FIXED DEPOSITS -----

function renderFDTable() {
  const tbody = document.querySelector('#table-fd tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  db.fds.forEach((f) => {
    const tr = document.createElement('tr');
    const badgeClass = f.status === 'Active' ? 'badge-success' : 'badge-danger';
    tr.innerHTML = `
      <td>${f.fd_id}</td>
      <td>${f.account_no}</td>
      <td>${formatCurrency(f.deposit_amount)}</td>
      <td>${f.interest}%</td>
      <td>${f.s_date}</td>
      <td>${f.maturitydate}</td>
      <td>${formatCurrency(f.maturity_amount)}</td>
      <td><span class="badge ${badgeClass}">${f.status}</span></td>
      <td>
        <button class="action-btn" data-action="edit" data-fd="${f.fd_id}">Edit</button>
        <button class="action-btn danger" data-action="delete" data-fd="${f.fd_id}">Delete</button>
      </td>`;
    tbody.appendChild(tr);
  });
}

function fillFDForm(f) {
  document.getElementById('fd-id').value = f?.fd_id || '';
  document.getElementById('fd-account').value = f?.account_no || '';
  document.getElementById('fd-deposit').value = f?.deposit_amount || '';
  document.getElementById('fd-interest').value = f?.interest || '';
  document.getElementById('fd-sdate').value = f?.s_date || '';
  document.getElementById('fd-mdate').value = f?.maturitydate || '';
  document.getElementById('fd-maturity-amt').value = f?.maturity_amount || '';
  document.getElementById('fd-status').value = f?.status || '';
}

function initFDPage() {
  populateAccountSelects();
  renderFDTable();

  const tbody = document.querySelector('#table-fd tbody');
  tbody.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const action = target.dataset.action;
    const id = target.dataset.fd;
    if (!action || !id) return;

    const idx = db.fds.findIndex((f) => f.fd_id === id);
    if (idx === -1) return;

    if (action === 'edit') {
      fillFDForm(db.fds[idx]);
    } else if (action === 'delete') {
      if (confirm('Delete this FD?')) {
        db.fds.splice(idx, 1);
        renderFDTable();
        initDashboard();
      }
    }
  });

  document.getElementById('btn-add-fd').addEventListener('click', () => {
    fillFDForm(null);
  });
  document.getElementById('fd-reset').addEventListener('click', () => {
    fillFDForm(null);
  });

  document.getElementById('form-fd').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = {
      fd_id: document.getElementById('fd-id').value.trim(),
      account_no: document.getElementById('fd-account').value,
      deposit_amount: Number(document.getElementById('fd-deposit').value || 0),
      interest: Number(document.getElementById('fd-interest').value || 0),
      s_date: document.getElementById('fd-sdate').value,
      maturitydate: document.getElementById('fd-mdate').value,
      maturity_amount: Number(document.getElementById('fd-maturity-amt').value || 0),
      status: document.getElementById('fd-status').value || 'Active',
    };

    if (!fd.fd_id || !fd.account_no) {
      alert('FD ID and Account are required');
      return;
    }

    const idx = db.fds.findIndex((f) => f.fd_id === fd.fd_id);
    if (idx === -1) db.fds.push(fd);
    else db.fds[idx] = fd;

    renderFDTable();
    initDashboard();
    renderReports();
    alert('FD saved in in-memory store. Connect to backend to persist.');
  });
}

// ----- LOANS -----

function renderLoansTable() {
  const tbody = document.querySelector('#table-loans tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  db.loans.forEach((l) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${l.loan_id}</td>
      <td>${l.account_no}</td>
      <td>${l.loantype}</td>
      <td>${formatCurrency(l.principalamt)}</td>
      <td>${l.interest}%</td>
      <td>${l.s_date}</td>
      <td>${l.e_date}</td>
      <td>${formatCurrency(l.emi_amt)}</td>
      <td>${formatCurrency(l.outstandingamt)}</td>
      <td>${l.status}</td>
      <td>
        <button class="action-btn" data-action="edit" data-loan="${l.loan_id}">Edit</button>
        <button class="action-btn danger" data-action="delete" data-loan="${l.loan_id}">Delete</button>
      </td>`;
    tbody.appendChild(tr);
  });
}

function fillLoanForm(l) {
  document.getElementById('loan-id').value = l?.loan_id || '';
  document.getElementById('loan-account').value = l?.account_no || '';
  document.getElementById('loan-type').value = l?.loantype || '';
  document.getElementById('loan-principal').value = l?.principalamt || '';
  document.getElementById('loan-interest').value = l?.interest || '';
  document.getElementById('loan-sdate').value = l?.s_date || '';
  document.getElementById('loan-edate').value = l?.e_date || '';
  document.getElementById('loan-emi').value = l?.emi_amt || '';
  document.getElementById('loan-outstanding').value = l?.outstandingamt || '';
  document.getElementById('loan-status').value = l?.status || '';
}

function initLoansPage() {
  populateAccountSelects();
  renderLoansTable();

  const tbody = document.querySelector('#table-loans tbody');
  tbody.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const action = target.dataset.action;
    const id = target.dataset.loan;
    if (!action || !id) return;

    const idx = db.loans.findIndex((l) => l.loan_id === id);
    if (idx === -1) return;

    if (action === 'edit') {
      fillLoanForm(db.loans[idx]);
    } else if (action === 'delete') {
      if (confirm('Delete this loan?')) {
        db.loans.splice(idx, 1);
        renderLoansTable();
        initDashboard();
        renderReports();
      }
    }
  });

  document.getElementById('btn-add-loan').addEventListener('click', () => {
    fillLoanForm(null);
  });
  document.getElementById('loan-reset').addEventListener('click', () => {
    fillLoanForm(null);
  });

  document.getElementById('form-loan').addEventListener('submit', (e) => {
    e.preventDefault();
    const loan = {
      loan_id: document.getElementById('loan-id').value.trim(),
      account_no: document.getElementById('loan-account').value,
      loantype: document.getElementById('loan-type').value,
      principalamt: Number(document.getElementById('loan-principal').value || 0),
      interest: Number(document.getElementById('loan-interest').value || 0),
      s_date: document.getElementById('loan-sdate').value,
      e_date: document.getElementById('loan-edate').value,
      emi_amt: Number(document.getElementById('loan-emi').value || 0),
      outstandingamt: Number(document.getElementById('loan-outstanding').value || 0),
      status: document.getElementById('loan-status').value || 'Active',
    };

    if (!loan.loan_id || !loan.account_no) {
      alert('Loan ID and Account are required');
      return;
    }

    const idx = db.loans.findIndex((l) => l.loan_id === loan.loan_id);
    if (idx === -1) db.loans.push(loan);
    else db.loans[idx] = loan;

    renderLoansTable();
    initDashboard();
    renderReports();
    alert('Loan saved in in-memory store. Connect to backend to persist.');
  });
}

// ----- SIMPLE PAGES FOR OTHER ENTITIES -----

const simpleEntityConfigs = {
  nominees: {
    title: 'Nominees',
    fields: [
      { id: 'account_no', label: 'Account No' },
      { id: 'nominee_name', label: 'Nominee Name' },
      { id: 'nominee_percentage', label: 'Percentage' },
    ],
  },
  properties: {
    title: 'Properties',
    fields: [
      { id: 'propertyid', label: 'Property ID' },
      { id: 'aadharno', label: 'Aadhar No' },
      { id: 'propertyname', label: 'Name' },
      { id: 'propertytype', label: 'Type' },
      { id: 'estimatedvalue', label: 'Estimated Value' },
    ],
  },
  vehicles: {
    title: 'Vehicles',
    fields: [
      { id: 'vehicleid', label: 'Vehicle ID' },
      { id: 'aadharno', label: 'Aadhar No' },
      { id: 'make', label: 'Make' },
      { id: 'model', label: 'Model' },
      { id: 'vehicletype', label: 'Type' },
    ],
  },
  preciousMetals: {
    title: 'Precious Metals',
    fields: [
      { id: 'metalid', label: 'Metal ID' },
      { id: 'aadhar_no', label: 'Aadhar No' },
      { id: 'metal_name', label: 'Metal' },
      { id: 'purity', label: 'Purity' },
    ],
  },
  dependents: {
    title: 'Dependents',
    fields: [
      { id: 'dependent_id', label: 'Dependent ID' },
      { id: 'aadhar_no', label: 'Aadhar No' },
      { id: 'dependent_name', label: 'Name' },
      { id: 'relation', label: 'Relation' },
    ],
  },
  shares: {
    title: 'Shares',
    fields: [
      { id: 'isin', label: 'ISIN' },
      { id: 'aadhar_no', label: 'Aadhar No' },
      { id: 'company_name', label: 'Company' },
      { id: 'quantity', label: 'Qty' },
      { id: 'currentprice', label: 'Current Price' },
    ],
  },
  mutualFunds: {
    title: 'Mutual Funds',
    fields: [
      { id: 'mf_id', label: 'MF ID' },
      { id: 'aadhar_no', label: 'Aadhar No' },
      { id: 'fund_name', label: 'Fund Name' },
      { id: 'scheme_type', label: 'Scheme Type' },
    ],
  },
  insurance: {
    title: 'Insurance',
    fields: [
      { id: 'insurance_id', label: 'Insurance ID' },
      { id: 'aadhar_no', label: 'Aadhar No' },
      { id: 'policy_no', label: 'Policy No' },
      { id: 'insurancetype', label: 'Type' },
      { id: 'coverageamt', label: 'Coverage' },
    ],
  },
  moneyBorrowed: {
    title: 'Money Borrowed',
    fields: [
      { id: 'borrowid', label: 'Borrow ID' },
      { id: 'aadhar_no', label: 'Aadhar No' },
      { id: 'lendername', label: 'Lender' },
      { id: 'amtborrowed', label: 'Amount' },
    ],
  },
  moneyLended: {
    title: 'Money Lended',
    fields: [
      { id: 'lendid', label: 'Lend ID' },
      { id: 'aadhar_no', label: 'Aadhar No' },
      { id: 'borrowername', label: 'Borrower' },
      { id: 'amtlended', label: 'Amount' },
    ],
  },
};

function buildSimpleEntityPage(section, entityKey) {
  const cfg = simpleEntityConfigs[entityKey];
  if (!cfg) return;

  section.innerHTML = `
    <header class="page-header">
      <h2>${cfg.title}</h2>
      <button class="primary" data-btn="add">Add</button>
    </header>
    <div class="layout-two-columns">
      <div>
        <h3>All ${cfg.title}</h3>
        <table class="data-table">
          <thead>
            <tr>
              ${cfg.fields.map((f) => `<th>${f.label}</th>`).join('')}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div>
        <h3>Add / Edit ${cfg.title.slice(0, -1)}</h3>
        <form class="entity-form">
          ${cfg.fields
            .map(
              (f) => `
              <label>${f.label}
                <input type="text" name="${f.id}" />
              </label>`,
            )
            .join('')}
          <div class="form-actions">
            <button type="submit" class="primary">Save</button>
            <button type="button" data-btn="reset" class="secondary">Reset</button>
          </div>
        </form>
      </div>
    </div>`;

  const tbody = section.querySelector('tbody');
  const form = section.querySelector('form');

  function render() {
    tbody.innerHTML = '';
    db[entityKey].forEach((row) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        ${cfg.fields
          .map((f) => `<td>${row[f.id] != null ? row[f.id] : ''}</td>`)
          .join('')}
        <td>
          <button class="action-btn" data-action="edit" data-id="${row[cfg.fields[0].id]}">Edit</button>
          <button class="action-btn danger" data-action="delete" data-id="${row[cfg.fields[0].id]}">Delete</button>
        </td>`;
      tbody.appendChild(tr);
    });
  }

  function fillForm(row) {
    cfg.fields.forEach((f) => {
      const input = form.querySelector(`[name="${f.id}"]`);
      if (input) input.value = row ? row[f.id] ?? '' : '';
    });
  }

  tbody.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const action = target.dataset.action;
    const id = target.dataset.id;
    if (!action || !id) return;

    const pkField = cfg.fields[0].id; // assume first is primary key
    const idx = db[entityKey].findIndex((r) => String(r[pkField]) === String(id));
    if (idx === -1) return;

    if (action === 'edit') {
      fillForm(db[entityKey][idx]);
    } else if (action === 'delete') {
      if (confirm('Delete record?')) {
        db[entityKey].splice(idx, 1);
        render();
      }
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const record = {};
    cfg.fields.forEach((f) => {
      const input = form.querySelector(`[name="${f.id}"]`);
      record[f.id] = input ? input.value : null;
    });
    const pkField = cfg.fields[0].id;
    const pk = record[pkField];
    if (!pk) {
      alert('Primary field is required');
      return;
    }
    const idx = db[entityKey].findIndex((r) => String(r[pkField]) === String(pk));
    if (idx === -1) db[entityKey].push(record);
    else db[entityKey][idx] = record;

    render();
    alert('Record saved in in-memory store. Connect to backend to persist.');
  });

  const resetBtn = section.querySelector('button[data-btn="reset"]');
  resetBtn.addEventListener('click', () => fillForm(null));
  render();
}

function initSimplePages() {
  document.querySelectorAll('.simple-page').forEach((section) => {
    const entity = section.dataset.entity;
    if (entity && db[entity]) buildSimpleEntityPage(section, entity);
  });
}

// ----- REPORTS (based on your SQL queries) -----

function renderReports() {
  // Query 1: Customers with both FD and Loan
  const r1 = document.querySelector('#report-fd-loan tbody');
  if (!r1) return;
  r1.innerHTML = '';

  const accountsWithFD = new Set(db.fds.map((f) => f.account_no));
  const accountsWithLoan = new Set(db.loans.map((l) => l.account_no));

  const userIds = new Set();
  db.bankAccounts.forEach((a) => {
    if (accountsWithFD.has(a.account_no) && accountsWithLoan.has(a.account_no)) {
      userIds.add(a.aadhar_no);
    }
  });

  Array.from(userIds).forEach((aadhar) => {
    const u = db.users.find((x) => x.aadhar_no === aadhar);
    if (!u) return;
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${u.name}</td><td>${u.aadhar_no}</td>`;
    r1.appendChild(tr);
  });

  // Query 2: FD maturing in the current month
  const r2 = document.querySelector('#report-fd-maturing tbody');
  r2.innerHTML = '';
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();

  db.fds.forEach((f) => {
    const d = new Date(f.maturitydate);
    if (d.getMonth() === month && d.getFullYear() === year) {
      const acc = db.bankAccounts.find((a) => a.account_no === f.account_no);
      const u = acc && db.users.find((x) => x.aadhar_no === acc.aadhar_no);
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${u ? u.name : '-'}</td><td>${f.fd_id}</td><td>${formatDate(f.maturitydate)}</td>`;
      r2.appendChild(tr);
    }
  });

  // Query 3: Total FD amount per user
  const r3 = document.querySelector('#report-total-fd tbody');
  r3.innerHTML = '';
  const totals = {};
  db.fds.forEach((f) => {
    const acc = db.bankAccounts.find((a) => a.account_no === f.account_no);
    if (!acc) return;
    totals[acc.aadhar_no] = (totals[acc.aadhar_no] || 0) + Number(f.deposit_amount || 0);
  });
  Object.entries(totals).forEach(([aadhar, total]) => {
    const u = db.users.find((x) => x.aadhar_no === aadhar);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${u ? u.name : aadhar}</td><td>${formatCurrency(total)}</td>`;
    r3.appendChild(tr);
  });

  // Query 7: Total number of loans issued per year
  const rLoansYear = document.querySelector('#report-loans-per-year tbody');
  rLoansYear.innerHTML = '';
  const perYear = {};
  db.loans.forEach((l) => {
    const y = new Date(l.s_date).getFullYear();
    perYear[y] = (perYear[y] || 0) + 1;
  });
  Object.entries(perYear)
    .sort(([a], [b]) => Number(a) - Number(b))
    .forEach(([yearKey, count]) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${yearKey}</td><td>${count}</td>`;
      rLoansYear.appendChild(tr);
    });

  // Query 8: Users who borrowed and lended money
  const rBorrowLend = document.querySelector('#report-borrow-lend tbody');
  rBorrowLend.innerHTML = '';
  const borrowedUsers = new Set(db.moneyBorrowed.map((m) => m.aadhar_no));
  const lendedUsers = new Set(db.moneyLended.map((m) => m.aadhar_no));
  const both = [...borrowedUsers].filter((x) => lendedUsers.has(x));
  both.forEach((aadhar) => {
    const u = db.users.find((x) => x.aadhar_no === aadhar);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${u ? u.name : aadhar}</td>`;
    rBorrowLend.appendChild(tr);
  });

  // Query 9: User with highest total loan amount
  const rHighestLoan = document.querySelector('#report-highest-loan tbody');
  rHighestLoan.innerHTML = '';
  const loanTotals = {};
  db.loans.forEach((l) => {
    const acc = db.bankAccounts.find((a) => a.account_no === l.account_no);
    if (!acc) return;
    loanTotals[acc.aadhar_no] = (loanTotals[acc.aadhar_no] || 0) + Number(l.principalamt || 0);
  });
  let maxUser = null;
  let maxValue = 0;
  Object.entries(loanTotals).forEach(([aadhar, total]) => {
    if (total > maxValue) {
      maxValue = total;
      maxUser = aadhar;
    }
  });
  if (maxUser) {
    const u = db.users.find((x) => x.aadhar_no === maxUser);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${u ? u.name : maxUser}</td><td>${formatCurrency(maxValue)}</td>`;
    rHighestLoan.appendChild(tr);
  }
}

// ----- INIT -----

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initDashboard();
  initUsersPage();
  initAccountsPage();
  initFDPage();
  initLoansPage();
  initSimplePages();
  renderReports();
});
