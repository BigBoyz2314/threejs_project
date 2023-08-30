import React from 'react'

import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder='Under Mantainance'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className='aipicker-textarea'
        disabled
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton 
            type='outline'
            title='Asking AI..'
            customStyles='text-xs'
            disabled
          />
        ) : (
          <>
            <CustomButton 
              type='outline'
              title='AI Logo'
              // handleClick={() => handleSubmit('logo')}
              customStyles='text-xs p-2'
            />

            <CustomButton 
              type='filled'
              title='AI Full'
              // handleClick={() => handleSubmit('logo')}
              customStyles='text-xs p-2'
            />
          </>  
        )
      }
      </div>
    </div>
  )
}

export default AIPicker