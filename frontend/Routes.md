      {user ? <>
      <Route path="/cabinet" element={<TasksPage />} />
      <Route path="/tinder/:id" element={<TaskPage />} />
      <Route path="/match/:id" element={<TaskPage />} />
      <Route path="/events" element={<TimerPage />} />
      <Route path="/events/:id" element={<ProfilePage />} />
      <Route path="/chats" element={<ProfilePage />} />
      <Route path="/chats/:id" element={<ProfilePage />} />
      </>
      :
      <>
      <Route path="/registraton/1" element={<TasksPage />} />
      <Route path="/registraton/2" element={<TasksPage />} />
      <Route path="/login" element={<TaskPage />} />
      </>
      }