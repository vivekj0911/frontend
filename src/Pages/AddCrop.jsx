"use client"

import { useState } from "react"
import { Leaf, Calendar, Sprout, BarChart3, Loader2 } from "lucide-react"

export default function AddCropForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    cropName: "",
    variety: "",
    plantingDate: "",
    harvestDate: "",
    expectedYield: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Add your API call here
      // await fetch('/api/crops', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      console.log("Form submitted:", formData)
      setFormData({
        cropName: "",
        variety: "",
        plantingDate: "",
        harvestDate: "",
        expectedYield: "",
      })

      // Add your success notification here
    } catch (error) {
      console.error("Error:", error)
      // Add your error notification here
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-6 pt-17 pl-20  flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-6 text-white">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <Sprout className="h-8 w-8" />
              Add New Crop
            </h2>
            <p className="mt-2 opacity-90">Enter your crop details below</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Crop Name */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Leaf className="h-4 w-4 text-emerald-500" />
                Crop Name
              </label>
              <input
                type="text"
                name="cropName"
                value={formData.cropName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 outline-none"
                placeholder="Enter crop name"
              />
            </div>

            {/* Variety */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Sprout className="h-4 w-4 text-emerald-500" />
                Variety
              </label>
              <input
                type="text"
                name="variety"
                value={formData.variety}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 outline-none"
                placeholder="Enter crop variety"
              />
            </div>

            {/* Dates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Planting Date */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Calendar className="h-4 w-4 text-emerald-500" />
                  Planting Date
                </label>
                <input
                  type="date"
                  name="plantingDate"
                  value={formData.plantingDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 outline-none"
                />
              </div>

              {/* Harvest Date */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Calendar className="h-4 w-4 text-emerald-500" />
                  Expected Harvest Date
                </label>
                <input
                  type="date"
                  name="harvestDate"
                  value={formData.harvestDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 outline-none"
                />
              </div>
            </div>

            {/* Expected Yield */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <BarChart3 className="h-4 w-4 text-emerald-500" />
                Expected Yield
              </label>
              <input
                type="number"
                name="expectedYield"
                value={formData.expectedYield}
                onChange={handleChange}
                step="0.01"
                min="0"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 outline-none"
                placeholder="Enter expected yield"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 px-6 rounded-lg font-medium 
                       hover:from-emerald-600 hover:to-green-600 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 
                       transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Adding Crop...
                </>
              ) : (
                <>
                  <Sprout className="h-5 w-5" />
                  Add Crop
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

