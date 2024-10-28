import React, { useState } from 'react';
import CustomModal from '../Modal/CustomModal';
import { useApihandler } from '@/hooks/useApiHandler';

type Props = {
  aiModal: boolean;
  setAiModal?: any;
  handleAiResponse?: any;
};

const AIModal: React.FC<Props> = ({ aiModal, setAiModal, handleAiResponse }) => {
  // State for input fields
  const [selling, setSelling] = useState('');
  const [campaignGoal, setCampaignGoal] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [targetArea, setTargetArea] = useState('');
  const [specialOffers, setSpecialOffers] = useState('');
  const [audienceAge, setAudienceAge] = useState('');

  const [resData, setResData] = useState<any>(null);

  const { postData } = useApihandler();

  const handleResponse = (res: any) => {
    setResData(res);
    // handleAiResponse(res)
  };

  const handleConfirm = () => {
    // Handle confirm action
    setAiModal(false);
    handleAiResponse(resData);
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission

    const url = 'campaign/ai/snapchat';
    const prompt = `Create a campaign based on the following details:
    1. What are you selling? ${selling}
    2. What is your goal for this campaign? ${campaignGoal}
    3. What is your product category? ${productCategory}
    4. Who is your targeted audience? ${targetAudience}
    5. What is the area you want to target? ${targetArea}
    6. Do you have any special offers? ${specialOffers}
    7. The age of your targeted audience? ${audienceAge}`;

    const formData = {
      prompt,
    };

    postData({ formData, url, handleResponse });
  };

  return (
    <div>
      <CustomModal
        open={aiModal}
        onClose={() => setAiModal(false)}
        title="Generate Campaign Using AI"
      >
        {!resData ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                What are you selling?
              </label>
              <input
                type="text"
                value={selling}
                onChange={(e) => setSelling(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                What is your goal for this campaign?
              </label>
              <input
                type="text"
                value={campaignGoal}
                onChange={(e) => setCampaignGoal(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                What is your product category?
              </label>
              <input
                type="text"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Who is your targeted audience?
              </label>
              <input
                type="text"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                What is the area you want to target?
              </label>
              <input
                type="text"
                value={targetArea}
                onChange={(e) => setTargetArea(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Do you have any special offers?
              </label>
              <input
                type="text"
                value={specialOffers}
                onChange={(e) => setSpecialOffers(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                The age of your targeted audience?
              </label>
              <input
                type="text"
                value={audienceAge}
                onChange={(e) => setAudienceAge(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">AI Campaign Details</h3>
            <div>
              <strong>Age Range:</strong> {resData.ageRange.join(' - ')}
            </div>
            <div>
              <strong>Languages:</strong> {resData.languages.join(', ')}
            </div>
            <div>
              <strong>Genders:</strong> {resData.gender.join(', ')}
            </div>
            
            <div>
              <strong>Countries:</strong> {resData.countries.join(', ')}
            </div>
            <div>
              <strong>Daily Budget:</strong> ${resData.daily_budget}
            </div>
            <div>
              <strong>Duration:</strong> {resData.duration} days
            </div>
            <div>
              <strong>Objective:</strong> {resData.objective}
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleConfirm}>
                Confirm
            </button>
          </div>
        )}
      </CustomModal>
    </div>
  );
};

export default AIModal;
