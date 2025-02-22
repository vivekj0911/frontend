import React, { useState } from "react";

const EditableField = ({ label, value, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API call
    onSave(editedValue);
    setIsSaving(false);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedValue(value);
    setIsEditing(false);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 relative group transition-all hover:shadow-md">
      <div className="flex justify-between items-start mb-2">
        <label className="text-sm font-medium">{label}</label>
        {!isEditing && (
          <button
            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => setIsEditing(true)}
          >
            ✏️
          </button>
        )}
      </div>
      {isEditing ? (
        <div className="space-y-3">
          {label === "Description" ? (
            <textarea
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg resize-none"
            />
          ) : (
            <input
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          )}
          <div className="flex gap-2 justify-end">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
              onClick={handleSave}
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Save"}
            </button>
            <button
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
              onClick={handleCancel}
              disabled={isSaving}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <p className="text-sm text-gray-600">{value}</p>
      )}
    </div>
  );
};

const CropDetailsView = ({ crop, onUpdate, onBack }) => {
  return (
    <div className="p-20 pt-25 pl-45" >
      <button
        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mb-6"
        onClick={onBack}
      >
        ← Back to Crops
      </button>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">{crop.name}</h1>
      <div className="aspect-[21/9] relative rounded-lg overflow-hidden mb-8">
        <img src={crop.image} alt={crop.name} className="w-full h-full object-cover" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EditableField
          label="Fertilization"
          value={crop.fertilization}
          onSave={(value) => onUpdate("fertilization", value)}
        />
        <EditableField
          label="Pesticides"
          value={crop.pesticides}
          onSave={(value) => onUpdate("pesticides", value)}
        />
        <EditableField
          label="Sowing Time"
          value={crop.sowingTime}
          onSave={(value) => onUpdate("sowingTime", value)}
        />
        <EditableField
          label="Harvest Time"
          value={crop.harvestTime}
          onSave={(value) => onUpdate("harvestTime", value)}
        />
        <EditableField
          label="Watering Schedule"
          value={crop.wateringSchedule}
          onSave={(value) => onUpdate("wateringSchedule", value)}
        />
        <EditableField
          label="Soil Type"
          value={crop.soilType}
          onSave={(value) => onUpdate("soilType", value)}
        />
        <EditableField
          label="Description"
          value={crop.description}
          onSave={(value) => onUpdate("description", value)}
        />
      </div>
    </div>
  );
};

export default CropDetailsView;