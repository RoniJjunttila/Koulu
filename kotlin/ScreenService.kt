package com.screenshotapp

import android.app.Service
import android.content.Intent
import android.os.IBinder
import android.app.NotificationChannel
import android.app.NotificationManager
import android.os.Build
import androidx.core.app.NotificationCompat
import android.content.Context
import android.util.Log
import android.app.Notification
import android.content.pm.ServiceInfo
import android.app.PendingIntent

class ScreenCaptureService : Service() {

    companion object {
        private const val NOTIFICATION_ID = 1
        private const val CHANNEL_ID = "ScreenCaptureServiceChannel"
    }

override fun onCreate() {
    super.onCreate()
    Log.d("ScreenCaptureService", "onCreate called")
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        val name = "Screen Capture Service Channel"
        val importance = NotificationManager.IMPORTANCE_HIGH
        val channel = NotificationChannel(CHANNEL_ID, name, importance).apply {
            description = "Channel description"
        }
        val notificationManager: NotificationManager =
        getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        notificationManager.createNotificationChannel(channel)
    }

    val notification = NotificationCompat.Builder(this, CHANNEL_ID)
        .setContentTitle("Screen Capture")
        .setContentText("Capturing the screen.")
        .setSmallIcon(android.R.drawable.ic_menu_camera)
        .build()

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) 
        startForeground(NOTIFICATION_ID, notification)
    }
}
override fun onStartCommand(intent: Intent, flags: Int, startId: Int): Int {
    Log.d("ScreenCaptureService", "onStartCommand called")
    val notification = buildForegroundNotification()
    startForeground(NOTIFICATION_ID, notification)
    return START_STICKY // or START_REDELIVER_INTENT if you want the service to restart with the last intent after being killed
}

private fun buildForegroundNotification(): Notification {
    Log.d("ScreenCaptureService", "Building foreground notification")
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        val name = "Screen Capture Service Channel"
        val importance = NotificationManager.IMPORTANCE_HIGH
        val channel = NotificationChannel(CHANNEL_ID, name, importance).apply {
            description = "Channel description"
        }
        val notificationManager: NotificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        notificationManager.createNotificationChannel(channel)
    }

    val captureIntent = Intent(this, ScreenCaptureReceiver::class.java).apply {
        action = "com.screenshotapp.ACTION_START_SCREEN_CAPTURE"
    }
    val pendingIntent = PendingIntent.getBroadcast(this, 0, captureIntent, PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE)

    return NotificationCompat.Builder(this, CHANNEL_ID)
        .setContentTitle("")
        .setContentText("")
        .setSmallIcon("")
        .setContentIntent(pendingIntent)
        .build()
}


    override fun onBind(intent: Intent?): IBinder? {
        return null
    }
}
