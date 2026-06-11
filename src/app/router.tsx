import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ResourceDetailsPage } from '../features/resources/pages/ResourceDetailsPage'
import { ResourceListPage } from '../features/resources/pages/ResourceListPage'
import { ResourceOverviewPage } from '../features/resources/pages/ResourceOverviewPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/resources" replace />} />
        <Route path="/resources" element={<ResourceListPage />} />
        <Route path="/resources/:resourceId" element={<ResourceOverviewPage />} />
        <Route path="/resources/:resourceId/details" element={<ResourceDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}