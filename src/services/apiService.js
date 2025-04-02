import axios from 'axios';

const API_BASE_URL = 'https://localhost:5001/api';

const getLeadsByStatus = async (status) => {
  const response = await axios.get(`${API_BASE_URL}/Leads/${status}`);
  return response.data;
};

const updateLead = async (lead) => {
    console.log(lead);
  await axios.put(`${API_BASE_URL}/lead/${lead.id}`, lead);
};

export default {
    getLeadsByStatus,
    updateLead,
};