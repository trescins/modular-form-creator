import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ResourceListPage } from '@features/resources/pages/ResourceListPage'
import { ResourceOverviewPage } from '@features/resources/pages/ResourceOverviewPage'
import { ResourceDetailsPage } from '@features/resources/pages/ResourceDetailsPage'
import { BasicInfoPage } from '@features/resources/pages/BasicInfoPage'
import { ProjectDetailsPage } from '@features/resources/pages/ProjectDetailsPage'
import { ResourceLayout } from '@features/resources/components/ResourceLayout'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/resources" replace />} />
        <Route path="/resources" element={<ResourceListPage />} />
        <Route path="/resources/:resourceId" element={<ResourceLayout />}>
          <Route index element={<ResourceOverviewPage />} />
          <Route path="details" element={<ResourceDetailsPage />} />
          <Route path="basic-info" element={<BasicInfoPage />} />
          <Route path="project-details" element={<ProjectDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
